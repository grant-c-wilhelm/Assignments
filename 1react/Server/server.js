const express = require('express');
require('dotenv').config();

const app = express();

//Database

const database = require('./database.js');
//make sure to unclude this, it converts everything ot json
app.use(express.json());


app.get('/cosmicBeverages', (req, res) => {
   const foundBeverages = database.find();
    res.send(foundBeverages)
    })
app.post('/cosmicBeverages', (req, res) => {
    //see what the body is stating
    const beverageToSave = req.body;
    //add it to the database
    const savedBeverage = database.save(beverageToSave)
    res.send(savedBeverage);
})


app.listen(process.env.PORT, () => console.log('server listening on Port 8080'))