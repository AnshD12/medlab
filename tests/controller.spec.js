describe('Main Controller', function(){
	var mockService, scope, mainCtrl,expenseDeferred;
	beforeEach(angular.mock.module('medlab'));
	mockService = {};
	beforeEach(inject(function(_$rootScope_,_$controller_,_$q_){
		scope = _$rootScope_.$new();
		$q = _$q_;
		expenseDeferred = $q.defer();
		$controller = _$controller_;
		mockService.getExpenses = function() {
			return expenseDeferred.promise;
		}
		mainCtrl = $controller('mainCtrl',{
			"$scope": scope,
			"mainSrv":mockService
		});
	}));
	it('controller should be defined', function() {
	    expect(mainCtrl).toBeDefined();
	});
	it('should exist', function(){
		var expenses = [{
				'description' : 'hotel',
				'amount' : 1200
			}];
		expenseDeferred.resolve(expenses);
		scope.$digest();
		expect(scope.expenses).toEqual(expenses);
	});
})