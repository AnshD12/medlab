var get_expenses = require("../modules/getExpenses.js");
module.exports = function(router){

	router.route('/get-expenses')
	.get(function(req,res){

		get_expenses.getExpenses(req.db, function(err,r){
			if(err){
				res.send(err);
			}else{
				res.send(r);
			}
		})
	});
};