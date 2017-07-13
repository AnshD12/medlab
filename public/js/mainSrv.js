angular.module('medlab',[]).service('mainSrv', ['$http', function($http){
	this.getExpenses = function(){
		var data = {
			url : 'http://localhost:8080/api/get-expenses',
			method : 'GET'
		};

		return $http(data);
	}

	this.createExpense = function(d){
		var data = {
			url : 'http://localhost:8080/api/create-expense',
			method : 'POST',
			data : {
				'description' : d.description,
				'amount' : d.amount
			}
		}

		return $http(data);
	}
}])