var app = angular.module("seanBrageDotCom", ["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('index',{
      url: "/home",
      templateUrl: "../partials/index.html",
      controller: "mainControl"
    })
    $urlRouterProvider.otherwise('/home')
})
