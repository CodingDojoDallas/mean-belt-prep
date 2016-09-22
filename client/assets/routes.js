console.log('****  routes.js  ****');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'usersController as uC'
    })
    .when('/topics', {
      templateUrl: 'partials/topics.html',
      controller: 'usersController as uC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
