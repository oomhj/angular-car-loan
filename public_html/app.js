var mobileApp = angular.module('myMobileApp', ['ngRoute','ngTouch']);
function routeconfig($routeProvider) {
    $routeProvider.
            when('/', {
                templateUrl: 'v1.html'
            }).
            when('/v2', {
                templateUrl: 'v2.html'
            }).
            otherwise(
                    {
                        redirectTo: '/'
                    });
}

mobileApp.config(routeconfig);
