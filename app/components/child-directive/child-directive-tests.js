describe ( 'ChildDirectiveTests', function ( ) {

    beforeEach ( module ( 'testnest',
        'components/child-directive/child-directive-template.html' ) );

    var scope, elem, template, dirt, ctl;

    beforeEach ( inject ( function ( $templateCache, $compile, $rootScope ) {
        template = $templateCache.get ( 'components/child-directive/child-directive-template.html' );
        $templateCache.put ( 'components/child-directive/child-directive-template.html', template );

        scope = $rootScope;
        scope.data = 'TEST VALUE';
        elem = angular.element ( '<tn-child-directive data="data"></tn-child-directive>' );
        dirt = $compile ( elem ) ( scope );
        scope.$apply ( );

        ctl = dirt.isolateScope ().tnChildDirCtl;
    }) );

    it ( '', function ( ) { console.info ( 'Running ChildDirective tests...')} );

    it ( 'scope.data value should be part of what is displayed',
        function ( ) {
           var child = angular.element ( dirt.find ( '#item-content' ) ) [ 0 ];
           expect ( child.innerText.indexOf ( scope.data ) ).not.toBe ( -1 );
        });
});