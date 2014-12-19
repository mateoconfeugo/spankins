package Slap::Config;
use Moose;
use File::Slurp qw(read_file write_file);
use File::Spec::Functions qw(catfile catdir);
use JSON::XS;
use namespace::autoclean;

has settings => (is=>'rw', isa=>'HashRef', lazy_build=>1);
has cfg_file_path => (is=>'rw', lazy_build=>1);

sub _build_cfg_file_path {
    my $self = shift;
    return $ENV{SLAP_CFG_DIR} || catfile($ENV{SLAP_ROOT_DIR}, 'slap_config.json');
}

sub _build_settings {
    my $self = shift;
    return decode_json(read_file($self->cfg_file_path));
}

run() unless caller;

sub run {
    my $obj = SLAP::Config->new();
    my $setting = $obj->settings();
    return $obj;
}

no Moose;
1;
