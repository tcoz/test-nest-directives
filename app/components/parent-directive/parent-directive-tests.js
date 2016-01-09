describe ( 'ParentDirectiveTests', function ( ) {

    // Tcoz: Two html files, because ParentDirective uses ChildDirective.
    // If we don't include the second file this way, you get a GET error.
    beforeEach ( module ( 'testnest',
        'components/parent-directive/parent-directive-template.html',
        'components/child-directive/child-directive-template.html' ) );

    var scope, elem, template, dirt, ctl;

    beforeEach ( inject ( function ( $templateCache, $compile, $rootScope ) {
        template = $templateCache.get ( 'components/parent-directive/parent-directive-template.html' );
        $templateCache.put ( 'components/parent-directive/parent-directive-template.html', template );

        scope = $rootScope;
        scope.data = [ 'Val1', 'Val2' ];
        elem = angular.element ( '<tn-parent-directive data="data"></tn-parent-directive>' );
        dirt = $compile ( elem ) ( scope );
        scope.$apply ( );

        ctl = dirt.isolateScope ().tnParentDirCtl;
    }) );

    it ( '', function ( ) { console.info ( 'Running ParentDirective tests...') } );

    it ( 'should have as many child items as it does scope.data.length',
        function ( ) {
            var children = angular.element ( dirt.find ( 'tn-child-directive' ) );
            expect ( children.length ).toEqual ( scope.data.length );
        });
});
