/*jslint white: true */

console.log( 'app-services Loaded' );

var app = angular.module( 'app-services', [] )
.factory( 'Posts', function( $resource ) {

    console.log( 'Posts service Loaded' );
    return $resource( 'http://abandonedstroller.com/wp-json/wp/v2/posts/:id' );

} );

