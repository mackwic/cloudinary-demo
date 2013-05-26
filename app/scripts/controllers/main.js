'use strict';

var module = angular.module('practiceApp');

module.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

module.controller('UploadCtrl', function($scope) {    
    $scope.files = [];

    $scope.submitMsg = 'Choose which image to send';
  });

module.controller('ViewCtrl', function($scope) {
      $scope.images = [];
      $scope.error = undefined;
      $scope.maxImg = 10;

      $scope.getImages = function () {
        $http.get('https://)
      };
  });
