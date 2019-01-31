const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();

//convert body to js from json
app.use(express.json());

//ROUTES
app.use('/api/coffee', require('./routes/coffee'))

//handle errors
app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })
})


mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('CONNECTED TO  MONGODB')
})
app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)

})