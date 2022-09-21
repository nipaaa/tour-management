/**
 * Title: Create a tour schema
 * Description: Model based schema with respect to tour's credentials
 * Author: Hasibul Islam
 * Date: 21/09/2022
 */

/* external import */
const mongoose = require("mongoose");

/* creating schema */
const tourSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Provide an image on this tour"],
      unique: [true, "Already exists, provide a new tour image"],
    },
    name: {
      type: String,
      required: [true, "Provide a name on this tour"],
      unique: [true, "Already exists, provide a new tour name"],
      trim: true,
      minLength: [10, "Tour name should be at least 10 characters"],
      maxLength: [100, "Tour name should be at most 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Provide a brief description on this tour"],
      trim: true,
      minLength: [50, "Tour description should be at least 50 characters"],
      maxLength: [500, "Tour description should be at most 500 characters"],
    },
    ratings: {
      type: Number,
      required: [true, "Provide a ratings on this tour"],
      enum: {
        values: [1, 2, 3, 4, 5],
        message: "Ratings invalid, must be between 1 to 5",
      },
    },
    price: {
      type: Number,
      required: [true, "Provide a valid price on this tour"],
      min: [500, "Price should be al least $500"],
      max: [2000, "Price should at most $2000"],
    },
    status: {
      type: String,
      required: [true, "Provide valid status on this tour"],
      trim: true,
      enum: {
        values: ["in-stock", "out-of-stock"],
        message: "Status {VALUE} is invalid, must be in-stock or out-of-stock",
      },
    },
    duration: {
      type: String,
      required: [true, "Provide duration on this tour"],
      trim: true,
      message: "Example: 4 days & 5 nights or 2 days & 3nights",
    },
    transport: {
      type: String,
      required: [true, "Provide transport on this tour"],
      trim: true,
      enum: {
        values: [
          "By Bus",
          "By Train",
          "By Air",
          "By Boat",
          "By Aerial Tramways",
          "By Car",
        ],
        message:
          "Transport {VALUE} is invalid - By Bus/Train/Air/Boat/Car/Aerial Tramways",
      },
    },
    views: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* creating instance */
const Tour = new mongoose.model("Tours", tourSchema);

module.exports = Tour;
