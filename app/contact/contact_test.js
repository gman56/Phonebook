describe('myApp', function(){
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
        expect(ctrl).toBeDefined(); // failing - doesn't like ngStorage
    });
});