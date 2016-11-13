movieStubApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/home.html",
      controller: "movieController"
    })
    .otherwise({
        redirectTo: "/"
    });
});