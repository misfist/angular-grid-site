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

/*jslint white: true */

console.log( 'controllers.js Loaded' );

var app = angular.module( 'app-controllers', [] )
    .controller( 'MainCtrl', function() {
        console.log( 'app-controllers Loaded' );
    } );
/*jslint white: true */

const VIEWS_DIR = 'views/';

console.log( 'directives.js Loaded' );

var app = angular.module( 'app-directives', [] )
    .directive( 'headerDirective', function() {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            templateUrl: VIEWS_DIR + 'sections/header.html',
        }
    } )
    .directive( 'footerDirective', function() {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            templateUrl: VIEWS_DIR + 'sections/footer.html',
        }
    } )
    .directive( 'navigationDirective', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            templateUrl: VIEWS_DIR + 'modules/navigation.html',
            //controller: controllerFunction, //Embed a custom controller in the directive
            //link: function ( $scope, element, attrs ) { } //DOM manipulation
        }
    });
/*jslint white: true */

var app = angular.module( 'app-factory', [] );

console.log( 'app-factory Loaded' );

/*jslint white: true */

var app = angular.module( 'app-filters', [] );

console.log( 'app-filters Loaded' );

/*jslint white: true */

var app = angular.module( 'app-services', [] );

console.log( 'app-services Loaded' );

