const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//MiddleWare body to js
app.use(express.json());


//ROUTES
app.use('/api/coffee', require('./routes/coffee'))


//HandleErrors
app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })
})

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("Connected to MongoDB")
})

app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})