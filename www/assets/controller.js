angular.module('VagrantBoxes', [
  'VagrantBoxes.services',
  'VagrantBoxes.controllers'
]);

angular.module('VagrantBoxes.services', [])

  .factory('jsonAPIservice', function($http) {
    var jsonAPI = {};

    jsonAPI.getBoxes = function() {
      return $http({
        method: 'GET', 
        url: 'manifest.json'
      });
    }

    return jsonAPI;
  });    
    
angular.module('VagrantBoxes.controllers', [])

  .controller('boxesController', function($scope, jsonAPIservice) {
    $scope.modalShown = false;
    jsonAPIservice.getBoxes().success(function (response) {
        $scope.boxList = response;
    });
  });