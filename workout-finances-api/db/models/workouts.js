const mongoose = require('../lib/mongoose');

const workoutSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now,
	},
	people: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	}
});

exports.Workouts = mongoose.model('Workouts', workoutSchema);