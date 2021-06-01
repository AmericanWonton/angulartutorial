var app = angular.module('myApp', []);

//Set a custom delimiter for templates
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

//Used for lists and objects
app.controller('myCtrl', function($scope) {
  $scope.names = ["Emil", "Tobias", "Linus"];
  $scope.count = 0;
  $scope.clickcount = 0;
  $scope.funcount = 0;
  $scope.myFunction = function() {
    $scope.funcount++;
  };
  $scope.showMe = false; //Use this to control whether it should START as not showing
  $scope.showFunc = function() {
    $scope.showMe = !$scope.showMe;
  }
  $scope.locationFunc = function(myE) {
    $scope.x = myE.clientX;
    $scope.y = myE.clientY;
  }
  //Form section
  $scope.firstname = "John";
  //Form 2 Selection
  $scope.master = {firstName: "John", lastName: "Doe"};
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();
});