'use strict';

// angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
//     $scope.global = Global;
// }]);
  function Controller($scope) {
    $scope.master = {};
 
    $scope.update = function(user) {
      $scope.master = angular.copy(user);
      console.log($scope.master)
    };
 
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };
 
    $scope.reset();
  }