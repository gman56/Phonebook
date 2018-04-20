describe('AddController', function(){
    beforeEach(module('myApp'));

    var ctrl, scope;
    beforeEach(inject(function($controller, $rootScope, $localStorage) {
        scope = $rootScope.$new();
        ctrl = $controller('AddController', {
            $scope: scope
        });
        $localStorage.$reset();
    }));

    it('should have defined AddController', function() {
        expect(ctrl).toBeDefined();
    });


});
