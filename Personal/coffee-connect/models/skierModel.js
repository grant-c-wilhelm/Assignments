const mongoose = require('mongoose')

const skierSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    homeResortArea: String,
    experience: String,
    skiLengthTime: Number,
 
})
module.exports = mongoose.model('Skiers', skierSchema)