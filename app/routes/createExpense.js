var create = require("../modules/createExpense.js");
module.exports = function(router){

	router.route('/create-expense')
	.post(function(req,res){

		var data = req.body;
		console.log(data);
		create.createExpense(req.db, data, function(err,r){
			if(err){
				res.send(err);
			}else{
				res.send(r);
			}
		})
	});
};