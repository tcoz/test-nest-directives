var connect = require ( 'connect' );
var serveStatic = require ( 'serve-static' );
connect ().use ( serveStatic (
    '/Users/tconsolazio/PycharmProjects/test-nest-directives/app' ) ).listen ( 8090 );