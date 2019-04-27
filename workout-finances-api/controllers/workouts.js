const DB = require('../db/index');

// Get list with workouts
const getWorkouts = (req, res) => {
	DB.Workouts.find({}) // Find all workouts 
		.then((workouts) => {			
			return res.json({
				status: 0,
				workouts: workouts, // Set all dishes to response
			});
		})
		.catch((err) => {
			console.error(err);
		});
};

const addWorkout = (req, res) => {
	if (req.body) {
		const newWorkout = new DB.Workouts(req.body);
		
		newWorkout
			.save()
			.then((workout) => {
				return res.json({
					status: 0,
					data: 'Тренировка записана',
				})
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		return;
	}
};

const removeWorkout = (req, res) => {
	console.log(`Remove dish with id ${req.body}`);
	if (req.body) {
		DB.Workouts.deleteOne({
			_id: req.body.id,
		})
			.then((data) => {
				res.json({
					status: 0,
					data: data,
				})
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

function connect(app) {
	app.get('/workouts', getWorkouts);
	app.post('/workouts/addWorkout', addWorkout);
	app.delete('/workouts/removeWorkout', removeWorkout);
};

module.exports = { connect };
