const express = require('express');
require('dotenv').config();

const app = express();

//Database

const database = require('./database.js');

//make sure to include this, it converts everything ot json
app.use(express.json());


app.get('/cosmicBeverages', (req, res) => {
    const foundBeverages = database.find();
    res.send(foundBeverages)
    res.status(204).send()
})
app.post('/cosmicBeverages', (req, res) => {
    //see what the body is stating
    const beverageToSave = req.body;
    //add it to the database
    const savedBeverage = database.save(beverageToSave)

    //send back a response containing the newly added items
    res.send(savedBeverage);
})

app.delete('/cosmicBeverage/:id', (req, res) => {
    //grab the ID from the req
    const id = req.params.id;
    //find what to be deleted

    //remove that thing
    database.findByIdAndRemove(id);

    //return back a confirm of removal
    res.status(204).send()
}) 
 app.put('/cosmicBeverages/:id', (req, res) => {
     const id = req.params.id;

     const updater = req.body

    const updateBeverage = database.findByIdAndRemove(id,update)


 })

app.listen(process.env.PORT, () => console.log(`server listening on Port ${process.env.PORT}`))