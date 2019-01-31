const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    origin: String,
    style: String,
    price: Number,
    additives: [{
        kind: String,
        amount: Number
    }]
});

module.exports = mongoose.model('Coffee', coffeeSchema)