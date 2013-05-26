'use strict';

angular.module('practiceApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/upload', {
          templateUrl: 'views/uploading.html',
          controller: 'UploadCtrl'
      })
      .when('/view', {
          templateUrl: 'views/view.html',
          controller: 'ViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
