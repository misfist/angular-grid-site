/*jslint white: true */

console.log( 'controllers.js Loaded' );

var app = angular.module( 'app-controllers', ['underscore'] )
    .controller( 'MainCtrl', function() {
        console.log( 'MainCtrl Loaded' );
    } )
    .controller( 'PostCtrl', function( $scope, Posts ) {

        console.log( 'PostCtrl Loaded' );

        Posts.query( function( posts ) {

            $scope.posts = posts;

        } );

        

    } );