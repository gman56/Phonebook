describe('myApp', function(){
    beforeEach(module('myApp'));

    var ctrl, scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('AddController', {
            $scope: scope
        });
    }));

    it('should have defined AddController', function() {
        expect(ctrl).toBeDefined(); // failing - doesn't like ngStorage
    });
});


//
// it('adding record to contact array', function () {
//     let newObj = {};
//     $scope.newContact = {
//         "name": "New Contact",
//         "phone": "(222) 222-222",
//         "email": "hello@gmail.com",
//         "birthday": "01/01/2222",
//         "avatar": ""
//     };
//     $scope.pageData = {
//         "contacts": [
//             {
//                 "id": 1,
//                 "name": "Erin Eyeball",
//                 "phone": "(123) 456-7890",
//                 "email": "one.eye.open@ilumin.com",
//                 "birthday": "01/01/1980",
//                 "avatar": "http://lorempixel.com/300/300/people/1"
//             },
//             {
//                 "id": 2,
//                 "name": "Johnathan Homebody",
//                 "phone": "(123) 456-7890",
//                 "email": "stayathomedad@wheresmom.com",
//                 "birthday": "01/01/1980",
//                 "avatar": "http://lorempixel.com/300/300/people/2"
//             }
//         ]
//     };
//     $scope.onAddClick();
//     expect($scope.pageData.contacts.length).toEqual(3);
// });