var app = angular.module('myApp', ['ngAnimate']); //Needed for the animation section

//Set a custom delimiter for templates
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});



//Used for lists and objects
app.controller('myCtrl', function($scope) {
  
});