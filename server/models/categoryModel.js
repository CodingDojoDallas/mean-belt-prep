var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
	category: {
		type: String
	}
});

var categoryModel = mongoose.model('categoryModel', categorySchema);
