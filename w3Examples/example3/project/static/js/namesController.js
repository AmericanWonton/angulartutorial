var myApp = angular.module('myApp', []);
//Set a custom delimiter for templates
myApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

//Controller location
myApp.controller('myCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});

//HTTP Response example
myApp.controller('myCtrl', function($scope, $http) {
  //First HTTP
  $http.get("/testGet").then(function (response) {
    $scope.myWelcome = response.data;
  });
  //Second HTTP
  $http({
    method : "GET",
      url : "/testGetTheSecond"
  }).then(function mySuccess(response) {
    $scope.myWelcomeTheSecond = response.data;
  }, function myError(response) {
    $scope.myWelcomeTheSecond = response.statusText;
  });
});

//Timeout example
myApp.controller('myCtrl', function($scope, $timeout) {
  $scope.myHeader = "Hello World!";
  $timeout(function () {
    $scope.myHeader = "How are you today?";
  }, 2000);
});

//Interval example
myApp.controller('myCtrl', function($scope, $interval) {
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});

//Create your own service
myApp.service('hexafy', function() {
  this.myFunc = function (x) {
    return x.toString(16);
  }
});

myApp.controller('myCtrl', function($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255);
}); //Make sure to add it to the controller

myApp.filter('myFormat',['hexafy', function(hexafy) {
  return function(x) {
    return hexafy.myFunc(x);
  };
}]); //Here it is applied to a filter

myApp.controller('myCtrl', function($scope) {
  $scope.counts = [255, 251, 200];
}); //Heres a controller with that counts array

