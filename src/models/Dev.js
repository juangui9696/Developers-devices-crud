const mongoose = require('mongoose');
const { Schema } = mongoose;

const Dev = new Schema({
    name: String,
    age: Number,
    id: Number,
    devices: []
});

module.exports = mongoose.model('Dev', Dev);