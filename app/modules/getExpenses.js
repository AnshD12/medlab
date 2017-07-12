exports.getExpenses = function(db,callback){
	db.collection('Expenses').find({}).toArray(function(error, docs){
		if(error){
			callback(error);
		}else{
			callback(null,docs);
		}
	})
}