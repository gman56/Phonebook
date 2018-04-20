describe('ContactController', function(){
    beforeEach(module('myApp'));

    var ctrl, scope, $httpBackend;
    beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        ctrl = $controller('ContactController', {
            $scope: scope,
        });

    }));

    it('should have defined ContactController', function() {
        expect(ctrl).toBeDefined();
    });


    // it('should delete record from contact array', function () {
    //     $scope.contactId = 1;
    //     scope.singleContact = {"id": 2, "name": "Johnathan Homebody"};
    //     scope.pageData = {
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
    //     scope.delete();
    //     expect(scope.contactArr.length).toEqual(3);
    // });
});