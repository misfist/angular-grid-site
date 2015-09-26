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