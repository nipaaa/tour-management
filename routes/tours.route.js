/* external import */
const express = require("express");

/* internal imports */
const toursController = require("../controllers/tours.controller");

/* router connection */
const router = express.Router();

/* router credentials */
router
  .route("/")
  .post(toursController.insertNewTour)
  .get(toursController.displayAllTours);

module.exports = router;
