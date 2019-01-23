const express = require('express');
require('dotenv').config();

const app = express();

//Database

const database = require('./database.js');

//make sure to include this, it converts everything ot json
app.use(express.json());

//GET ALL
app.get('/transformers', (req, res) => {
    const foundTransformers = database.find();
    res.status(200).send(foundTransformers)
})

//GET ONE 
app.get('/transformers', (req, res) => {
    const id = req.params.id

    const foundTransformers = database.find(id);
    
    res.status(200).send(foundTransformers)
})


//POST
app.post('/transformers', (req, res) => {
    //see what the body is stating
    const newTransformer = req.body;
    //add it to the database
    const savedBot = database.save(newTransformer)

    //send back a response containing the newly added items
    res.status(201).res.send(savedBot);
})



//DELETE
app.delete('/transformers/:id', (req, res) => {
    //grab the ID from the req
    const id = req.params.id;

    //find what to be deleted & remove that thing
    database.findByIdAndRemove(id);

    //return back a confirm of removal
    res.status(204).send()
})
//PUT
app.put('/transformers/:id', (req, res) => {
    
    //retrieve the ID
    const id = req.params.id;
    
    //update item in the database
    const updates = req.body
    
    //send response with updated item
    const updatedBot = database.findByIdAndRemove(id, updates)
    res.status(200).send(updatedBot)
})

app.listen(process.env.PORT, () => console.log(`server listening on Port ${process.env.PORT}`))