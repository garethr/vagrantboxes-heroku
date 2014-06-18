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
