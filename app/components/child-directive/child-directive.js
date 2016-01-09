var tnChildDirectiveController = function ( ) {
    console.log ( 'Running tnChildDirectiveController...' );
};

var tnChildDirective = function() {
    return {
        restrict : 'E',
        templateUrl : 'components/child-directive/child-directive-template.html',
        controller : tnChildDirectiveController,
        controllerAs : 'tnChildDirCtl',
        scope: { data : '=' }
    };
};

angular.module ( 'testnest.tnChildDirectiveModule', [] )
    .directive ( 'tnChildDirective', tnChildDirective );