angular.module('myPeepApp', []).controller('namesCtrl', function($scope) {
    //Set the delimiter
    var myPeepApp = angular.module('myPeepApp', []);
    //Set a custom delimiter for templates
    myPeepApp.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });
    $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Hege',country:'Sweden'},
      {name:'Kai',country:'Denmark'}
    ];
});