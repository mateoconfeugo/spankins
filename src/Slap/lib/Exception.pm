package Slap::Exception;
# ABSTRACT: The various exceptions thrown in the Bus modules
use Exception::Class (
    'Authentication' => {
        description => 'Generic Authentication Exception'
    },
    'Authorization' => {
        description => 'Generic Authorization Exception'
    },
    'InvalidArgs' => {
        description => 'invalid method parameter(s)'
    },
    'Database' => {
        description => 'Generic database exception'
    },
    'Slap' => {
        description => 'Generic Slap exception'
    },
    'Network' => {
        description => 'Network  exception'
    },
    'Monitoring' => {
        fields => [ 'data', 'path' ],
        description => 'problems with diagnostic channels'
    },
    );
1;
