const express = require('express')
const coffeeRouter = express.Router();
const Coffee = require('../models/coffee')
//HANDLE ENDPOINTS HERE
coffeeRouter.route('/')
    .get((req, res, next) => {
        //ask the database for the entire collection
        Coffee.find()
            .then(coffeeCollection => res.status(200).send(coffeeCollection))
            .catch(err => {
                res.status(500);
                next(err)
            })
    })
    .post((req, res, next) => {
        //get the fields from the req.body
        const coffeeData = req.body
        //turn it into a DOCUMENT
        const coffeeDoc = new Coffee(coffeeData);
        //SAVE it to the atabase
        coffeeDoc.save()
            .then(savedCoffeeDoc => res.status(201).send(savedCoffeeDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
        //send back the saved coffee document
    })


coffeeRouter.route('./:id')
    .get((req, res, next) => {
        //get id from the req params
        const id = req.params.id;
        //find coffee by id
        Coffee.findById(id)
            //send bacl that information    
            .then(foundCoffee => res.status(200).send(foundCoffee))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .delete((req, res, next) => {
        //finding the id
        const id = req.params.id;

        Coffee.findById(id)
            .then(() => res.status(204).send())
            .catch(err => {
                res.status(500);
                next(err);
            })

    })
    .put((req, res, next) => {
        const id = req.params.id;
        Coffee.findByIdAndUpdate(id)
            .then((updatedCoffee) => res.status(200).send(updatedCoffee))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

module.exports = coffeeRouter;