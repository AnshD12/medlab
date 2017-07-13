describe('Main Service', function(){
	var $http;
	beforeEach(angular.mock.module('medlab'));
	beforeEach(inject(function(_$http_){
		$http = _$http_;
	}));
	it('should exist', function(){
		expect($http).toBeDefined();
	});
})