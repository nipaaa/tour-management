/* internal imports */
const toursService = require("../services/tours.service");

/* insert a new tour */
async function insertNewTour(req, res, next) {
  try {
    const result = await toursService.insertNewTourService(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully insert a new tour on DB",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

/* display all tours */
async function displayAllTours(req, res, next) {
  try {
    const result = await toursService.displayAllTourServices(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Fetching required tours data from DB",
      count: result.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { insertNewTour, displayAllTours };
