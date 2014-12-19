package Slap::Task::Job;
# ABSTRACT: The process of updating the google spreadsheets with the lastest data.
use Moose;
use File::Spec::Functions qw(catfile);
use File::Slurp qw/slurp/;
use FSA::Rules;
use HTTP::Request;
use Slap::Config;
use LWP::UserAgent;
use Moose;
use namespace::autoclean;
use Riemann::Client;
use Try::Tiny;

has config => (is => 'rw', required=>1);
has control_logic => (is=>'rw', lazy_build=>1);
has monitor => (is=>'rw', lazy_build=>1);
has query_url => (is=>'rw');

with qw(Throwable);
with 'Slap::Exception::Engine';
with 'MooseX::Log::Log4perl';

sub execute {
    my ($self, $opts, $args) = @_;
    $self->logger->info("Asking the spankins-daemon-api server to list the jobs");
    $self->query_url("blah");
    $self->control_logic->start;
    $self->control_logic->switch until $self->control_logic->at('stop');
    return $self;
}

sub _build_control_logic {
    my ($self, $args) = shift;
    my $w;
    my $fsa = FSA::Rules->new(
        request => {
            on_enter => sub {
                my $state = shift;
                $self->logger->info("entering request state");
                $state->machine->{counter} = 0 unless $state->machine->{counter};
            },
            on_exit => sub {
                my $state = shift;
                $self->logger->info("exiting request state");
            },
            do => sub {
                $self->logger->info("requesting data");
                my $request = HTTP::Request->new(GET => $self->query_url);
                my $ua = LWP::UserAgent->new;
                my $response = $ua->request($request);
                my $state = shift;
            },
            rules => [
                monitor => sub {
                    $_[1] eq 'monitor'},
                stop => sub {$_[1] eq 'stop'}]

        },
        monitor => {
            do => sub {
                $self->logger->info("Send data request event to monitor");
                my $state = shift;
                $self->monitor({service => 'api query request', metric => 1, state => 'info',
                                description => '1 job list request'});
                $state->result('stop');
            },
            rules => [stop => sub {$_[1] eq 'stop'}]
        },
        stop => {
            do => sub {
                $self->in_use(0); # no
                $self->logger->info("Job task is not being used");
            },
            rules => [shutdown => sub {$_[1] eq 'shutdown'}]

        },
        shutdown => { do => sub { $self->logger->infor("Job Task Shutdown") } }
        );
    return $fsa;
}

around 'execute' => sub {
    my($method, $self, $args) = @_;
    my $result;
    my $sucess = try {
        $self->logger->info("Running task that issues the request for job related behavior.");
        $result = $self->$method($args);
    } catch {
        $self->throw({exception=>'Slap', message=>'Data download request failed.', error=>$_});
    };
    $result ? return $result : $self;
};

sub _build_monitor {
    my $self = shift;
    return Riemann::Client->new(host => $self->config->{'monitor_host'}, port => $self->config->{'monitor_port'});
}

sub run { return __PACKAGE__->new({config => LTD::Config->new()})->execute() }
run() unless caller();

no Moose;
1;
