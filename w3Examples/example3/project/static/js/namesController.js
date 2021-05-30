var app = angular.module('myApp', []);

//Set a custom delimiter for templates
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

//Used for lists and objects
app.controller('myCtrl', function($scope) {
  $scope.names = ["Emil", "Tobias", "Linus"];
  $scope.cars = [
    {model : "Ford Mustang", color : "red"},
    {model : "Fiat 500", color : "white"},
    {model : "Volvo XC90", color : "black"}
  ]; //Basic array example
  $scope.morecars = {
    car01 : "Ford",
    car02 : "Fiat",
    car03 : "Volvo"
  }; //More cars example
  $scope.moremorecars = {
    car01 : {brand : "Ford", model : "Mustang", color : "red"},
    car02 : {brand : "Fiat", model : "500", color : "white"},
    car03 : {brand : "Volvo", model : "XC90", color : "black"}
  };

});