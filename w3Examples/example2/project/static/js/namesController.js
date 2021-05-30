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
  $http.get("welcome.htm").then(function (response) {
    $scope.myWelcome = response.data;
  });
});