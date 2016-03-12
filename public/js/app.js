var app = angular.module("seanBrageDotCom", ["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('portfolio',{
      url: "/portfolio",
      templateUrl: "../partials/index.html",
      controller: "mainControl"
    })
    .state('resume',{
      url: '/resume',
      templateUrl: "../partials/resume.html",
      controller: "resumeControl"
    })
    .state('about',{
      url: '/about',
      templateUrl: "../partials/about.html",
      controller: "aboutControl"
    })
    .state
    $urlRouterProvider.otherwise('/portfolio')
})
