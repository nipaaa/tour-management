/* external import */
const mongoose = require("mongoose");

function dbConnection() {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "tour-management-system",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("TMS connect with MongoDB through Mongoose.");
    });
}

module.exports = dbConnection;
