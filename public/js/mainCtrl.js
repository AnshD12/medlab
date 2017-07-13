angular.module('medlab',[]).controller('mainCtrl', ['$scope','mainSrv' , function($scope,mainSrv){
	var refreshExpenses = function(){
		console.log($scope.expence);
		mainSrv.getExpenses().then(function(res){
			console.log("success");
			console.log(res.data);
			$scope.expenses = res.data;
		},function(res){
			console.log("error");
			console.log(res);
		});
	};
	refreshExpenses();	

	$scope.addExpense = function(data) {
		console.log(data);
		mainSrv.createExpense(data).then(function(res){
			console.log("success");
			console.log(res);
			refreshExpenses();	
			$scope.expense = {};
		},function(res){
			console.log("error");
			console.log(res);
		})
	}

}])