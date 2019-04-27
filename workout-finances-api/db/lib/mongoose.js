const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/workouts', { useNewUrlParser: true });

module.exports = mongoose;