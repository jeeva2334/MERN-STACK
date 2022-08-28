const express = require('express');
const { 
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcont');
const workouts = require('../moels/workouts');

const router = express.Router()


//get all workouts
router.get('/',getWorkouts)

//getting single workout
router.get('/:id',getSingleWorkout)

//creating an workout
router.post('/',createWorkout)

//deleting an workout
router.delete('/:id',deleteWorkout)

//update an workout
router.patch('/:id',updateWorkout)

module.exports = router;