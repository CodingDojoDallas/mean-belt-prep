var mongoose = require('mongoose');
var Topics = mongoose.model('topicModel');

function usersController(){
	
	this.index = function(req, res){
		Topics.find({}, function(err, data){
			if(err){
				res.json(err);
			} else {
				res.json(data);
			}
		})
	}
	
}

module.exports = new usersController();
