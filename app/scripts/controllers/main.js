'use strict';

var module = angular.module('practiceApp');


module.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});

var ExceptionCtrl = function($scope) {
    $scope.exp = [];

    $scope.addException = function(e, cause) {
        var str = 
            ((e.fileName !== undefined) ? '@' + e.fileName : '')
            + ((e.lineNumber !== undefined) ? ':' + e.lineNumber : '')
            + ' ' + e.message
            + ((cause !== undefined) ? '\ncause: ' + cause : '');

        $scope.exp.push(str);
    };
};

var ExceptionProvider = {

    $exceptionHandler: function() {
        var handler = function (e, cause) {
            var elt = document.getElementById('excp');
            var $scope = angular.element(elt).scope();
            $scope.addException(e, cause)
        };

        this.$get = function() {
            return handler;
        };
    }
};
module.provider(ExceptionProvider);

module.controller('ExceptionCtrl', ExceptionCtrl);
