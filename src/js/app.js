/*jslint white: true */
/**
 * 
 * AngularJS Content Grid
 * @description           Display content in a responsive grid using AngularJS and semantic Bootstrap 4
 * @author                Pea
 * @url                   misfist.com
 * @version               1.0.0
 * @date                  September 2015
 * @license               GPLv3
 * 
 */

 ;( function() {

    console.log( 'app Loaded' );

    var app = angular.module( 'app', ['underscore', 'ngResource', 'ngRoute', 'ngSanitize', 'app-controllers', 'app-directives', 'app-factory', 'app-filters', 'app-services'] );

    app.config( function( $routeProvider, $resourceProvider, $locationProvider ) {

        // If you get 'Error: $location:nobase $location in HTML5 mode requires a tag to be present!' https://docs.angularjs.org/error/$location/nobase
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $routeProvider
            .when( '/', {
                templateUrl: VIEWS_DIR + 'main.html',
                //controller: 'MainCtrl',
                title: 'Home'
            } )
            .otherwise( {
                redirectTo: '/'
            } );
    });


 } )();
