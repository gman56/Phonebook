'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'ContactController'
        });
    }])

    .controller('ContactController', function ($scope, $routeParams, $localStorage, $location, contactService) {
        $scope.nameEdit = false;
        $scope.phoneEdit = false;
        $scope.emailEdit = false;
        $scope.birthdayEdit = false;

        $scope.setAllFalse = function () {
            $scope.nameEdit = false;
            $scope.phoneEdit = false;
            $scope.emailEdit = false;
            $scope.birthdayEdit = false;
        };

        $scope.toggleName = function () {
            $scope.nameEdit = !$scope.nameEdit;
        };
        $scope.togglePhone = function () {
            $scope.phoneEdit = !$scope.phoneEdit;
        };
        $scope.toggleEmail = function () {
            $scope.emailEdit = !$scope.emailEdit;
        };
        $scope.toggleBirthday = function () {
            $scope.birthdayEdit = !$scope.birthdayEdit;
        };

        $scope.singleContact = null;
        $scope.editContact = null;
        let contactId = $routeParams.id;
        $scope.pageData = $localStorage.prevPageData;

        let contactArr = [];
        angular.forEach($scope.pageData, function(value) {
            contactArr.push(value);
        });

        for (let i of contactArr) {
            if (i.id == contactId) { // if id equals routeParam display that contact
                $scope.singleContact = i;
                $scope.editContact = JSON.parse(JSON.stringify(i)); // copy stored object for edit reset

            }
        }

        // updating localStorage object
        $scope.save = function () {
            $scope.setAllFalse();
            for (let i of contactArr) {
                if (i.id == contactId) { // if id equals routeParam
                    i.name = $scope.editContact.name;
                    i.phone = $scope.editContact.phone;
                    i.email = $scope.editContact.email;
                    i.birthday = $scope.editContact.birthday;
                    $localStorage.prevPageData = contactArr;
                }
            }

        };

        $scope.cancel = function () {
            $scope.setAllFalse();
            $scope.editContact = JSON.parse(JSON.stringify($scope.singleContact)); // resetting editable form

        };

        $scope.delete = function() {
            if(confirm("Are you sure you want to delete " + $scope.singleContact.name)) {
                for (let i=0; i<contactArr.length; i++) {
                    if (contactArr[i].id == contactId) { // if id equals routeParam display that contact
                        contactArr.splice(i,1);
                        $localStorage.prevPageData = contactArr;
                    }
                }
                $location.path('/entry');
            } else {
                // on cancel button pressed
            }
        }


    });