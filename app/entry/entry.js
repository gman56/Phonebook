'use strict';

angular.module('myApp.entry', ['ngRoute', 'myApp.contact', 'myApp.add'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entry', {
    templateUrl: 'entry/entry.html',
    controller: 'EntryController'
  });
}])

.controller('EntryController', function($scope, $http, $location, $localStorage, contactService) {
    $scope.contacts = null;
    $scope.contacts = $localStorage.prevPageData;

    if ($scope.contacts == null) { // if already populated don't call service
        contactService.callService().then(function (response) {
            $scope.contacts = response.data.contacts;
        }).catch(function (e) {
           console.log('Server Error: ' + e)
        });
    }

    $scope.go = function(path, params) {
      $location.path(path).search({'id': params});
      $localStorage.prevPageData = $scope.contacts;
    };

    // clears local storage for fresh service call
    $scope.reset = function() {
        $localStorage.$reset();
    };

});


