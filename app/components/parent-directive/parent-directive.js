var tnParentDirectiveController = function ( )  {
    console.log ( 'Running tnParentDirectiveController...' );
};

var tnParentDirective = function() {
    return {
        restrict : 'E',
        templateUrl : 'components/parent-directive/parent-directive-template.html',
        controller : tnParentDirectiveController,
        controllerAs : 'tnParentDirCtl',
        scope: { data : '=' }
    };
};

angular.module ( 'testnest.tnParentDirectiveModule', [] )
    .directive ( 'tnParentDirective', tnParentDirective );