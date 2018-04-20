'use strict';

angular.module('contactService', ['ngRoute'])

    .service('contactService', function($http) {
        this.callService = function() {
                return $http.get("seed.json");
        }
    });



