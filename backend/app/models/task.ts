import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    collaborators: {
        type: [],
        required: false
    }
})

module.exports = mongoose.model('Task',taskSchema)