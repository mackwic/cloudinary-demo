'use strict';

var module = angular.module('practiceApp');

module.controller('UploadCtrl', function($scope) {    
    $scope.files = [];

    $scope.submitMsg = 'Choose which image to send';
  });
