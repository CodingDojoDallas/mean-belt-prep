var mongoose = require('mongoose');
var Users = mongoose.model('userModel');

function usersController(){
	this.register =function(req,res){
		console.log('________', req.body)
		Users.find({username:req.body.username},function(err,data){
			if (err){
				console.log(err);
				return res.json({error:err});
			}
			else if (data.length ==1){
				return res.json(data)
			}
			else {
				var user = new Users(req.body);
				user.save(function(err,data){
					if (err){
						console.log(err);
						return res.json({error:err});
					}
					else {
						console.log('user added');
						return res.json(data);
					}
				})
			}
		})
	}
	
}

module.exports = new usersController();