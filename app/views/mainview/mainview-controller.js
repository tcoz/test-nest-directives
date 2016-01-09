'use strict';

var MainViewController = function ( ) {
    console.info ( 'Inside MainView Controller Constructor' );
    this.childitems = [ 'Child Item 1', 'Child Item 2' ];
};

angular.module ( 'testnest.MainViewModule',
    [ 'testnest.tnParentDirectiveModule',
      'testnest.tnChildDirectiveModule' ] )
    .controller ( 'MainViewController', MainViewController );