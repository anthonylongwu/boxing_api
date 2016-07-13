
(function () {
  "use strict";

  angular.module("app").controller("boxersCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/boxers.json").then(function(response) {
        $scope.boxers = response.data;
      });
      
    }

    $scope.toggleVisibility = function(boxer) {
      boxer.bioVisible = !boxer.bioVisible;
    }

    $scope.addBoxer = function(first_name, last_name) {
      var newPerson = {
        first_name: first_name,
        last_name: last_name,
        bioVisible: false
      };
      $http.post('/api/v1/boxers.json', newBoxer).then(function(response)){
        $scope.boxer.push(newBoxer);
        var boxerCallback = response.data;
        boxerCallback.bioVisible = false;
        $scope.boxers.push(boxerCallback);
        }, function(error) {
          $scope.errorMessages = error.data.errors
      });
    }

    $scope.deleteBoxer = function(boxer) {
      var index = $scope.boxers.indexOf(boxer)
      $scope.boxers.splice(index,1);
    }

    $scope.autocompleteName = function(text){
      $http.get("/api/v1/boxers/search.json?name=" + text).then(function(response))
    }

    $scope.toggleOrder = function(attribute) {
      console.log($scope.orderAttribute);
      if(attribute == $scope.orderAttribute) {
        $scope.diection = !$scope.direction;
      } else {
        $scope.direction = false
      }
      $scope.orderAttribute = attribute;
    }



  window.$scope = $scope;    
  });
})();