const workouts = require('../moels/workouts');
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async(req,res)=>{
    const workout = await workouts.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
}

//get single workout
const getSingleWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no workouts found"})
    }

    const workout = await workouts.findById(id)

    if(!workout){
        return res.status(400).json({msg:"no workouts found"})
    }

    res.status(200).json(workout)
}

//create workout

const createWorkout = async (req,res)=>{
    const {title, load, reps} = req.body
    try {
        const workout = await workouts.create({
            title, load, reps
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
//delete workout

const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no workouts found"})
    }

    const workout = await workouts.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(400).json({msg:"no workouts found"})
    }

    res.status(200).json(workout)

}
//update a workout

const updateWorkout = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "no workouts found"})
    }

    const workout = await workouts.findOneAndUpdate({_id:id},{
        ...req.body
    })


    if(!workout){
        return res.status(400).json({msg:"no workouts found"})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}