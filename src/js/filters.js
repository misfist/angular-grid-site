/*jslint white: true */

console.log( 'app-filters Loaded' );

var app = angular.module( 'app-filters', [] )
.filter( 'rawHtml', ['$sce', function( $sce ){
  return function( content ) {
    return $sce.trustAsHtml( content );
  };
}]);

