const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    descritpion: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('tasks', taskSchema)

module.exports = Task