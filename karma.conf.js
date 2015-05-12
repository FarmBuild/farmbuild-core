module.exports = function(config){
  config.set({

    basePath : '',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/index.js',
      'src/validations/index.src.js',
      'src/google-analytics/index.src.js',
      //'src/**/*.js'
//      'src/index.spec.js',
        'src/validations/index.spec.js',
        'src/google-analytics/index.spec.js',
    ],

    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    //logLevel: 'LOG_INFO', //this it NOT application log level, it's karma's log level.
    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
