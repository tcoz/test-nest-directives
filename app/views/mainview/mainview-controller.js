'use strict';

var MainViewController = function ( ) {
    this.childitems = [ 'Child Item 1', 'Child Item 2' ];
    console.info ( 'Inside MainView Controller Constructor' );
};

angular.module ( 'testnest.MainViewModule',
    [ 'testnest.tnParentDirectiveModule',
      'testnest.tnChildDirectiveModule' ] )
    .controller ( 'MainViewController', MainViewController );