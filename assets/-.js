'use strict';


angular.module('myApp', ['ngRoute', 'ngAnimate']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'showCtrl'});
  $routeProvider.when('/alt', {templateUrl: 'views/alt.html', controller: 'altCtrl'});
  $routeProvider.when('/test', {templateUrl: 'views/main.html', controller: 'editCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);


function showCtrl($scope) {
    $scope.keks = "КЕКС";
}
function altCtrl($scope) {
    $scope.alt = "АЛТ";
}
