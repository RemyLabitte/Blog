'use.strict';
var app = angular.module('blogApp', ["ngRoute"]);

app.config(['$routeProvider',
 function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl  : "views/main.html",
      controller: 'MainCtrl'
    })
    .when("/connexion", {
      templateUrl : "views/connexion.html"
      // controller: "ConnexionCtrl"
    })
  }
]);
