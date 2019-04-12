const express = require("express");
const skierRouter = express.Router();
const Skier = require("../models/skierModel");
//Handle Endpoints here

skierRouter
  .route("/")
  .get((req, res, next) => {
    //Ask database for the whole collection of skiers
    Skier.find()
      .then(skierCollection => res.status(200).send(skierCollection))
      .catch(err => {
        res.status(500);
        next(err);
      });
  })
  .post((req, res, next) => {
    //grab the data entered into the req body to be posted
    const skierData = req.body;
    //turn the data into a DOCUMENT
    const skierDocument = new Skier(skierData);
    //Save it to the database
    skierDocument
      .save()
      //now send it back to the document to get changed/saved
      .then(savedSkierData => res.status(201).send(savedSkierData))
      .catch(err => {
        res.status(500);
        next(err);
      });
  });

skierRouter
  .route("/:id")
  .get((req, res, next) => {
    //grab the ID from the params
    const id = req.params.id;

    //find the id specified by the params
    Skier.findById(id).then(foundSkier =>
      res
        .status(200)
        .send(foundSkier)
        .catch(err => {
          res.status(500);
          next(err);
        })
    );
  })
  .delete((req, res, next) => {
    const id = req.params.id;

    Skier.findByIdAndDelete(id)
      .then(() => res.status(204).send())
      .catch(err => {
        res.status(500);
        next(err);
      });
  })
  .put((req, res, next) => {
    //find the id
    const id = req.params.id;
    //identify updates made
    const updates = req.body;
    //execute updates if found
    Skier.findByIdAndUpdate(id, updates, { new: true })
      .then(updatedSkierInfo => res.status(200).send(updatedSkierInfo))
      .catch(err => {
        res.status(500);
        next(err);
      });
  });

module.exports = skierRouter;
