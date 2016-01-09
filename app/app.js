var testnest = angular.module ( 'testnest',
    [   'ngRoute',
        'testnest.MainViewModule' ] )

    .config ( [ '$routeProvider',
        function ( $routeProvider ) {

            console.info ( 'testnest.config is running...' );

            $routeProvider
                .otherwise ( {
                    templateUrl: 'views/mainview/mainview.html',
                    controller: 'MainViewController',
                    controllerAs: 'mainViewCtl'
                } );
        } ] );

testnest.run ( function ( $rootScope ) {
   $rootScope.$on ( '$routeChangeStart', function ( evt, next, current ) {
       console.info ( '$rootScope.on running, should be loading MainView...' );
	});
});

