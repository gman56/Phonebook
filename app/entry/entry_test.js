describe('myApp', function(){
    beforeEach(module('myApp'));

    var ctrl, scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('EntryController', {
            $scope: scope
        });
    }));

    it('should have defined EntryController', function() {
        expect(ctrl).toBeDefined();
    });
});