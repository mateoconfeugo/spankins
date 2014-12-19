package Slap::Exception::Engine;
# ABSTRACT: Exception Handling Framework Role
use Moose::Role;
use Carp;
use File::Spec::Functions qw(catfile catdir);
use Try::Tiny;
use SLAP::Exception;
use SLAP::Config;


has exception_dispatch_table => (is=>'rw', isa=>'HashRef[CodeRef]', lazy_build=>1);

with 'MooseX::Log::Log4perl';

sub BUILD {} # no-op
after BUILD => sub {
    my $self = shift;
    my $path = $self->config->settings->{log_config_path};
    Log::Log4perl::init_and_watch($path, 60);
    $self->logger(Log::Log4perl->get_logger());
    $self->logger->info("Starting Task Server");
};

sub handle_exception {
    my ($self, $args) = @_;
    my $err = $args->{error};
    my $exception =  $args->{exception} || $err->{exception};
    my $msg = $args->{message} || $err->{message};
    try {
      $exception->throw(error=>$err);
    } catch {
      try {
	  my $exception_handler = $self->exception_dispatch_table->{$exception};
	  $exception_handler->({message=>$msg, error=>$err});
      } catch {
	die $@;
      };
    };
    return $self;
}

sub get_exception_type {
    my $e = shift;
    my $module = ref $e;
    my @parts = split '::', $module;
    my $type = $parts[-1];
    return $type;
}

sub default_exception_handler {
    my ($self, $e) = @_;
    warn "ABOUT TO DIE BECAUSE: " . $e->error . "\n";
    die;
}

sub fatal_exception_handler {
    my ($self, $e) = @_;
    warn "FATAL EXCEPTION THROWN: " . $e->error . "\n";
    die;
}

sub log_exception {
    my ( $self, $e ) = @_;
    # Extract the type from the package name minus namespace.
    my $type = get_exception_type($e);
    my $message =  $e->message() ? $e->message() : $e;
    # Build and run query saving the exception into database.
    my ($sec, $min, $hour, $mday, $mon, $year ) = (localtime)[0, 1, 2, 3, 4, 5];
    $hour = sprintf "%02s", $hour;
    $min = sprintf "%02s", $min;
    $sec = sprintf "%02s", $sec;
    $mday = sprintf "%02s", $mday;
    $mon++;
    $mon = sprintf "%02s", $mon;
    $year += 1900;
    my $date_time = $year . $mon . $mday . $hour . $min . $sec;
    my @params = ($e->job_id, $e->fid, $type, $date_time, $message);
    use Data::Dumper;
    warn Dumper(\@params);
    return $self;
}

sub _build_exception_dispatch_table {
    my ($self, $args) = @_;

    # Ensure all exceptions are objects.
    local $SIG{__DIE__} = sub {
	my $err = shift;
	if (my  $e = Exception::Class->caught('Exception::Class') ) {
	    die $err; # re-throw
	}
	else {
	    Exception->throw(message => $err);
	  }
    };

    my $dt = {
	      Base => sub { $self->default_exception_handler($_[0]) },
	      Slap => sub { $self->default_exception_handler($_[0]) },
	      Network => sub { $self->default_exception_handler($_[0]) },
	      Monitoring =>  sub { $self->default_exception_handler($_[0]) },
	     };
    return $dt;
}

no Moose;
1;
