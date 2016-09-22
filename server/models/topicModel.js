var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	userID: {
		type: String,
		required: [true, 'Somehow we lost your id!']
	},
	comment: {
		type: String,
		required: [true, 'What did you want to say, again?']
	}
})

var answerSchema = new mongoose.Schema({
	answer: {
		type: String,
	},
	comments:[commentSchema],
	upVotes: {
		type: Number,
		min: 0
	},
	downVotes: {
		type: Number,
		min: 0
	}
})

var topicSchema = new mongoose.Schema({
	topic: {
		type: String,
		required: [true, 'Topics must be titled'],
		unique: true
	},
	description: {
		type: String,
		required: [true, 'Please describe your topic']
	},
	category: {
		type: String,
		required: [true, 'We must categorize ALL THE TOPICS']
	},
	userID: {
		type: String,
		required: true
	},
	answers: [answerSchema]
});

var topicModel = mongoose.model('topicModel', topicSchema);
