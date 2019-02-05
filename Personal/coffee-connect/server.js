const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
//convert req.body to js
app.use(express.json());

//Routes
app.use('/api/skierModel', require('./routes/skierModel'))

//Err handler
app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })

})

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('Connected to MongoDB')
})
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`)
})