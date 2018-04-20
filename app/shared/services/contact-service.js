'use strict';

angular.module('contactService', ['ngRoute'])

    .service('contactService', function($http) {
        this.callService = function(data) {
                return $http.get("seed.json");
        }
    });



