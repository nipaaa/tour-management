/* internal import */
const Tour = require("../schemas/tour.schema");

/* display specific tour service */
async function displaySpecificTourService(id) {
  const tour = await Tour.findById(id);
  let result = await Tour.updateOne(
    { _id: id },
    { $set: { views: tour.views + 1 } }
  );

  if (result.modifiedCount) {
    result = await Tour.findById(id);
  }

  return result;
}

/* reform specific tour service */
async function reformSpecificTourService(id, data) {
  const result = Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
}

/* trending tour services */
async function trendingTourServices() {
  const result = await Tour.find({}).sort("-views");
  return result.slice(0, 3);
}

/* cheapest tour services */
async function cheapestTourServices() {
  const result = await Tour.find({}).sort("price");
  return result.slice(0, 3);
}

module.exports = {
  displaySpecificTourService,
  reformSpecificTourService,
  trendingTourServices,
  cheapestTourServices,
};
