window.movieStubApp = angular.module("movieStubApp", ["ngResource", "ngRoute"]);
 
movieStubApp.controller("movieController", function ($scope) {

  $scope.headerSrc = "templates/home.html";

});