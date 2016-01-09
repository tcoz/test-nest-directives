module.exports = function ( config ) {

    // Tcoz: Note the preprocessor. It is VERY important.
    // It compiles our templates into javascript.
    // I'd recommend reading more about it online.
    // Also note the last "files" entry. It tells karma
    // to grab html files in nested directories (which is where I keep 'em).
    config.set ( {

        basePath: 'app/',
        frameworks: [ 'jasmine' ],

        files: [
            'lib/jquery.js',
            'lib/angular.min.js',
            'lib/angular_route.js',
            'lib/angular_mocks.js',

            'views/mainview/mainview-controller.js',
            'components/parent-directive/parent-directive.js',
            'components/child-directive/child-directive.js',

            'app.js',

            'views/mainview/mainview-tests.js',
            'components/parent-directive/parent-directive-tests.js',
            'components/child-directive/child-directive-tests.js',

            '**/*.html'
        ],

        exclude: [ ],
        preprocessors: { '**/*.html': [ 'ng-html2js' ] },
        reporters: [ 'progress' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ 'Chrome' ],
        singleRun: false

    } );
}
