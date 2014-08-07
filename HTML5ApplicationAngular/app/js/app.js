'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/exercise-3-part-2', {templateUrl: 'partials/partial1.html', controller: 'Exercise1'});
  $routeProvider.when('/exercise-3-part-1', {templateUrl: 'partials/partial2.html', controller: 'Exercise2'});
  $routeProvider.otherwise({redirectTo: '/exercise-3-part-1'});
}])
.factory('ExerciceOneValues',function(){
      var factory = {};
      var exercises = [
            {'id':1,'val':'','text':'enjoying a field trip'},
            {'id':1,'val':'','text':'working on computers'},
            {'id':1,'val':'','text':'taking a test'},
            {'id':1,'val':'','text':'doing a project'},
            {'id':1,'val':'','text':'giving a presentation'},
            {'id':1,'val':'','text':'practicing yoga'}
        ];
        factory.getExercises = function(){
                return exercises;
        };
        factory.setExercises = function (e){
                exercises = e;
        };
            return factory;
  });
