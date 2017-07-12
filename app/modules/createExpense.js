exports.createExpense = function(db,data,callback){
	db.collection("Expenses").insertOne(data , function(err, r){
		if(err){
			console.log(err);
			callback(err);
		}else{
			console.log("inserted successfully");
			callback(null,r);
		}	
	});
}