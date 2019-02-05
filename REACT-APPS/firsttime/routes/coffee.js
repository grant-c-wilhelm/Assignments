const express = require('express')
const coffeeRouter = express.Router();
const Coffee = require('../models/coffee'); //grabs out coffee model


//Handle Endpoints here

coffeeRouter.route('/')
    .get((req, res, next) => {
        //ask database for the entire collction of cofffee
        Coffee.find()
            .then(coffeeCollection => res.status(200).send(coffeeCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

    .post((req, res, next) => {
        //get the fields from the req body
        const coffeeData = req.body;
        
        //turn the data into a DOCUMENT
        const coffeeDoc = new Coffee(coffeeData);
        
        //Save it to the database
        coffeeDoc.save()
        //send it back to the saved coffee document
            .then(savedCoffeeDoc => res.status(201).send(savedCoffeeDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })      
    })

coffeeRouter.route('/:id')
    .get((req, res, next) => {
        //get id from req params
        const id = req.params.id;

        //find by id
        Coffee.findById(id)
            .then(foundCoffee => res.status(200).send(foundCoffee))
            .catch(err => {
                res.status(500)
                next(err);
            })
        //send it back
    })

    .delete((req, res, next) => {
        //find the id
        const id = req.params.id;

        Coffee.findByIdAndDelete(id)
            .then(() => res.status(204).send())
            .catch(err => {
                res.status(500)
                next(err);
            })
    })

    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Coffee.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedCoffee => res.status(200).send(updatedCoffee))
            .catch(err => {
                res.status(500);
                 next(err);
            })
    })
coffeeRouter.route('/:id/additives/:additiveId')

module.exports = coffeeRouter;