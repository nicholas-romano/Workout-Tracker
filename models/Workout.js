const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now 
    },
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }
});

const Workout = mongoose.model("Workout", WorkOutSchema);

module.exports = Workout;