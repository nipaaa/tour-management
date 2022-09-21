/* external import */
const express = require("express");

/* internal import */
const tourController = require("../controllers/tour.controller");

/* router connection */
const router = express.Router();

/* router credentials */
router.get("/trending", tourController.trendingTours);
router.get("/cheapest", tourController.cheapestTours);

router
  .route("/:id")
  .get(tourController.displaySpecificTour)
  .patch(tourController.reformSpecificTour);

module.exports = router;
