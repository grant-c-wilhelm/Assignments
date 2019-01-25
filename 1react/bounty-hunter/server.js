const express = require('express')
require('dotenv').config();

const app = express();

//DataBase

const database = require('./database.js');

app.listen(process.env.PORT, console.log(`listening on PORT ${process.env.PORT}`))
//Below converts to JSON
app.use(express.json());


//Get All
app.get('/bountyHunters', (req, res) => {
    //find all bountys
    const foundBountys = database.find();
    //send back info to client
    res.status(200).send(foundBountys)
})

//Get One
app.get('/bountyHunters/:id', (req, res) => {
    //get the id
    const id = req.params.id;
    //find the object using the id
    const foundBountyObjects = database.findById(id);
    //send it back
    res.status(200).send(foundBountyObjects)
})

//POST
app.post('/bountyHunters', (req, res) => {
    //See what the body is stating 
    const newBountyHunter = req.body;
    //Add the information to the database
    const savedBountyHunter = database.save(newBountyHunter)
    //send back a response containing the newly added items
    res.status(201).send(savedBountyHunter)
})

//DELETE
app.delete('/bountyHunters/:id', (req, res) => {
    //Grab the ID from teh Req
    const id = req.params.id;
    //Find what needs to be deleted and remove that thing
    database.findByIdAndRemove(id);
    //Return back a confirm of removal
    res.status(204).send()
})

//PUT
app.put('/bountyHunters/:id', (req, res) => {
    //Retrieve the ID
    const id = req.params.id;
    //Update the item to be Updated in the database
    const updates = req.body
    //send the response with the updayed item 
    const updatedBountyHunter = database.findByAndUpdate(id, updates)
    res.status(200).send(updatedBountyHunter)
})


