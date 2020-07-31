const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter a name for this cardio workout"
            },

            duration: {
                type: Number,
                required: "Enter the time spent on this workout"
            },
            distance: {
                type: Number,
                default:0
            },
            Weight: {
                type: Number,
                default:0
            },
            Sets: {
                type: Number,
                default:0
            },
            Reps: {
                type: Number,
                default:0
            },
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;