'use strict';

var module = angular.module('practiceApp');

module.controller('ViewCtrl', function($scope) {
      $scope.images = [];
      $scope.error = undefined;
      $scope.maxImg = 10;
      $scope.size   = 'default';
      $scope.cloudName = '';
      $scope.apiKey = '';
      $scope.apiSecret = '';

      $scope.getImages = function () {
          $scope.error = undefined;
          $scope.images = [];

          if ('' == $scope.cloudName || '' == $scope.apiKey || '' == $scope.apiSecret) {
              $scope.error = "Please provide all required informations !";
              return;
          }

          $scope.images = [ { src:"http://a2.res.cloudinary.com/dax08fxeh/image/facebook/barackobama.jpg"}, { src:"http://a4.res.cloudinary.com/dax08fxeh/image/upload/sample.jpg"} ];
      };
  });
