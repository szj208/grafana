require.config({
  urlArgs: 'bust=' + (new Date().getTime()),
  baseUrl: 'public/app_gen',

  paths: {
    config:                   'components/config',
    settings:                 'components/settings',
    kbn:                      'components/kbn',
    store:                    'components/store',

    text:                     '../vendor/requirejs-text/text',
    moment:                   '../vendor/moment',
    filesaver:                '../vendor/filesaver',
    ZeroClipboard:            '../vendor/ZeroClipboard',
    angular:                  '../vendor/angular/angular',
    'angular-route':          '../vendor/angular-route/angular-route',
    'angular-sanitize':       '../vendor/angular-sanitize/angular-sanitize',
    'angular-dragdrop':       '../vendor/angular-native-dragdrop/draganddrop',
    'angular-strap':          '../vendor/angular-other/angular-strap',
    'angular-ui':             '../vendor/angular-ui/angular-bootstrap',
    timepicker:               '../vendor/angular-other/timepicker',
    datepicker:               '../vendor/angular-other/datepicker',
    bindonce:                 '../vendor/angular-bindonce/bindonce',
    crypto:                   '../vendor/crypto.min',
    spectrum:                 '../vendor/spectrum',

    lodash:                   'components/lodash.extended',
    'lodash-src':             '../vendor/lodash',
    bootstrap:                '../vendor/bootstrap/bootstrap',

    jquery:                   '../vendor/jquery/dist/jquery',

    'extend-jquery':          'components/extend-jquery',

    'jquery.flot':             '../vendor/flot/jquery.flot',
    'jquery.flot.pie':         '../vendor/flot/jquery.flot.pie',
    'jquery.flot.events':      '../vendor/flot/jquery.flot.events',
    'jquery.flot.selection':   '../vendor/flot/jquery.flot.selection',
    'jquery.flot.stack':       '../vendor/flot/jquery.flot.stack',
    'jquery.flot.stackpercent':'../vendor/flot/jquery.flot.stackpercent',
    'jquery.flot.time':        '../vendor/flot/jquery.flot.time',
    'jquery.flot.crosshair':   '../vendor/flot/jquery.flot.crosshair',
    'jquery.flot.fillbelow':   '../vendor/flot/jquery.flot.fillbelow',

    modernizr:                '../vendor/modernizr-2.6.1',

    'bootstrap-tagsinput':    '../vendor/tagsinput/bootstrap-tagsinput',
    'aws-sdk':                '../vendor/aws-sdk/dist/aws-sdk.min',
  },
  shim: {

    spectrum: {
      deps: ['jquery']
    },

    crypto: {
      exports: 'Crypto'
    },

    ZeroClipboard: {
      exports: 'ZeroClipboard'
    },

    angular: {
      deps: ['jquery','config'],
      exports: 'angular'
    },

    bootstrap: {
      deps: ['jquery']
    },

    modernizr: {
      exports: 'Modernizr'
    },

    jquery: {
      exports: 'jQuery'
    },

    // simple dependency declaration
    //
    'jquery.flot':          ['jquery'],
    'jquery.flot.pie':      ['jquery', 'jquery.flot'],
    'jquery.flot.events':   ['jquery', 'jquery.flot'],
    'jquery.flot.selection':['jquery', 'jquery.flot'],
    'jquery.flot.stack':    ['jquery', 'jquery.flot'],
    'jquery.flot.stackpercent':['jquery', 'jquery.flot'],
    'jquery.flot.time':     ['jquery', 'jquery.flot'],
    'jquery.flot.crosshair':['jquery', 'jquery.flot'],
    'jquery.flot.fillbelow':['jquery', 'jquery.flot'],
    'angular-dragdrop':     ['jquery', 'angular'],
    'angular-mocks':        ['angular'],
    'angular-sanitize':     ['angular'],
    'angular-ui':           ['angular'],
    'angular-route':        ['angular'],
    'angular-strap':        ['angular', 'bootstrap','timepicker', 'datepicker'],
    'bindonce':             ['angular'],

    timepicker:             ['jquery', 'bootstrap'],
    datepicker:             ['jquery', 'bootstrap'],

    'bootstrap-tagsinput':          ['jquery'],
  },
});
