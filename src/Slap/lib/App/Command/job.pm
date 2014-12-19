package SLAP::App::Command::job;
########################################################################
# ABSTRACT:  Command line app to job
########################################################################
use Moose;
use Moose::Util qw(apply_all_roles);
use Devel::REPL;
use SLAP::Task::Job;
use File::Spec::Functions qw(catfile catdir);

extends qw(MooseX::App::Cmd::Command);

with 'MooseX::Log::Log4perl';

has task => (is  => 'rw', lazy_build=>1);

sub BUILD {
    my $self = shift;
    my $path = catfile($ENV{SLAP_ROOT_DIR}, 'log4perl.conf');
    Log::Log4perl::init_and_watch($path, 60);
    $self->logger(Log::Log4perl->get_logger());
    return $self;
}

sub _build_task {
    my $self = shift;
    return SLAP::Task::Job->new();
}

sub execute {
  my ( $self, $opt, $args ) = @_;
  $self->task->execute($opt, $args);
}

sub run  {
    my $cmd = __PACKAGE__->new({});
    $cmd->execute();
}

run() unless caller;

no Moose;
1;
