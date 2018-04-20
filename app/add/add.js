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
        let contactId = $routeParams.id;
        $scope.pageData = $localStorage.prevPageData;

        for(let i of $scope.pageData) {
            if(i.id == contactId) {
                $scope.singleContact = i;
            }
        }

        $scope.newContact = {};

        $scope.update = function(user) {
            $scope.newContact = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.newContact);
        };

        $scope.onAddClick = function() {
            let lastElementId = $scope.pageData[$scope.pageData.length - 1] ? $scope.pageData[$scope.pageData.length - 1].id: 1;
            newObj.id = lastElementId += 1;
            newObj.name = $scope.newContact.name;
            newObj.phone = $scope.newContact.phone;
            newObj.email = $scope.newContact.email;
            newObj.birthday = $scope.newContact.birthday;
            newObj.avatar = $scope.newContact.avatar;
            $scope.pageData.push(newObj);

            $localStorage.prevPageData = $scope.pageData;
            $location.path('/entry');
        };


    });