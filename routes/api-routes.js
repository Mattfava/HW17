const dbWorkout = require('../models/workout.js');
const router = require("express").Router();


    router.get("/api/workouts", (req, res) => {
        dbWorkout.find({}).then(workout => {
            res.json(workout);
        });
    });

    router.put("/api/workouts/:id", ({ body, params}, res) => {
        dbWorkout.findByIdAndUpdate(
            params.id,
            {$push:{exercises:body}},
            {new:true}).then(workout => {
            res.json(workout);
        });  
    });

    router.get("/api/workouts/range", (req, res) => {
        dbWorkout.find({}).then(workout => {
            res.json(workout);
        });
    });
    router.post("/api/workouts", ({ body }, res) => {
        dbWorkout.create(body).then((workout => {
            res.json(workout);
        }));
    });
module.exports = router;
//app.put = api/workouts/:id = dbWorkout.Workout.findbWorkoutyIdAndUpdate
//app.get("api/workouts/range") = dbWorkout.workout.find({})
//app.post = dbWorkout.Workout.create