'use strict';

angular.module('myApp.add', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add', {
            templateUrl: 'add/add.html',
            controller: 'AddController'
        });
    }])

    .controller('AddController', function($scope, $routeParams, $localStorage, $location) {
        $scope.singleContact = null;
        let newObj = {};
        $scope.pageData = $localStorage.prevPageData;


        let contactArr = [];
        angular.forEach($scope.pageData, function(value) {
            contactArr.push(value);
        });

        $scope.newContact = {};

        $scope.update = function(user) {
            $scope.newContact = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.newContact);
        };

        $scope.onAddClick = function() {
            let lastElementId = contactArr[contactArr.length - 1] ? contactArr[contactArr.length - 1].id: 1;
            newObj.id = lastElementId += 1;
            newObj.name = $scope.newContact.name;
            newObj.phone = $scope.newContact.phone;
            newObj.email = $scope.newContact.email;
            newObj.birthday = $scope.newContact.birthday;
            newObj.avatar = $scope.newContact.avatar;
            contactArr.push(newObj);

            $localStorage.prevPageData = contactArr;
            $location.path('/entry');
        };


    });