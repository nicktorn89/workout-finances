const DB = require('../db/index');

// Get list with workouts
const getWorkouts = (req, res) => {
	DB.Workouts.find({}) // Find all workouts 
		.then((workouts) => {			
			return res.json({
				status: 0,
				workouts: workouts, // Set all workouts to response
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
			.then(() => {
				return DB.Workouts.find({});
			})
			.then((workouts) => (
				res.json({
					status: 0,
					workouts: workouts, // Set all workouts to response
				})
			))
			.catch((err) => {
				console.error(err);
			});
	} else {
		return;
	}
};

const removeWorkout = (req, res) => {
	if (req.body) {
		const idArray = req.body.idArray.slice();
		let removeWorkouts;

		if (idArray.length > 0 && idArray.length < 2) {
			removeWorkouts = DB.Workouts.deleteOne({
				_id: idArray[0],
			});
		} else if (idArray.length > 0) {
			removeWorkouts = DB.Workouts.deleteMany({
				_id: idArray,
			});
		} else {
			return;
		}

		removeWorkouts
			.then(() => {
				return DB.Workouts.find({});
			})
			.then((workouts) => {
				res.json({
					status: 0,
					workouts: workouts,
				})
			})
			.catch((err) => {
				console.error(err);
			});
	}
};

function connect(app) {
	app.get('/workouts', getWorkouts);
	app.post('/workouts/addWorkout', addWorkout);
	app.post('/workouts/removeWorkout', removeWorkout);
};

module.exports = { connect };
