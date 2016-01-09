describe ( 'MainViewModule', function ( ) {

    beforeEach ( module ( 'testnest' ) );

    var scope, ctl, doc;

    beforeEach ( inject ( function ( $rootScope, $controller, $document ) {
        scope = $rootScope;
        doc = $document;
        ctl = $controller ( 'MainViewController', { $scope : scope } );
    }) );

    it ( '', function ( ) { console.info ( 'Running MainViewModule tests...')} );

    it ( 'Should have an array called childitems with two vals in it',
        function ( ) {
            expect ( ctl.childitems.length ).toBe ( 2 );
        });
});