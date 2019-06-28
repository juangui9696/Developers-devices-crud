const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
    name: String,
    age: Number,
    id: Number,
    devices: []
});

module.exports = mongoose.model('Task', Task);