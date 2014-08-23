'use strict';


angular.module('myApp', ['ngRoute', 'ngAnimate', 'firebase']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'showCtrl'});
  $routeProvider.when('/alt', {templateUrl: 'views/alt.html', controller: 'altCtrl'});
  $routeProvider.when('/test', {templateUrl: 'views/main.html', controller: 'editCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);


function showCtrl($scope, $firebase) {
    $scope.keks = "КЕКС";
}
function altCtrl($scope, $firebase) {
    $scope.alt = "АЛТ";
    var ref = new Firebase("https://smartyp.firebaseio.com/");
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "data");
    
    $scope.addMessage = function(text) {
    $scope.messages.$add({text: text});
  }
}
