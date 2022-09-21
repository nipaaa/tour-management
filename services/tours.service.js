/* internal import */
const Tour = require("../schemas/tour.schema");

/* insert a new tour service */
async function insertNewTourService(data) {
  const result = await new Tour(data).save();
  // const result = await Tour.insertMany(data);

  return result;
}

/* display all tour services */
async function displayAllTourServices(queries) {
  const result = await Tour.find({})
    .select(queries.fields?.split(",")?.join(" "))
    .sort(queries.sort)
    .skip(Number(queries.page) - 1)
    .limit(Number(queries.limit));

  return result;
}

module.exports = { insertNewTourService, displayAllTourServices };
