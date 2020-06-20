const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: { type: String },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number }
    }]
},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
}
);

//adds a dynamically-created property to schema
WorkOutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

WorkOutSchema.virtual("totalPounds").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.weight;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkOutSchema);

module.exports = Workout;