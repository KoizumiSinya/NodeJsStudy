let myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/contactList').success(function (response) {
        console.log("I get the data from I request");
        $scope.contactList = response;
    });
}]);