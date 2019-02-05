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
    experience: {
        type: String,
        enum: ["beginner", "intermediate", "advanced", "pro"]
    },
    skiLengthTime: Number,
 
})
module.exports = mongoose.model('Skiers', skierSchema)