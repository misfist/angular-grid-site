/*jslint white: true */

console.log( 'controllers.js Loaded' );

var app = angular.module( 'app-controllers', [] )
    .controller( 'MainCtrl', function() {
        console.log( 'app-controllers Loaded' );
    } );