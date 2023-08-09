const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A course must have a name"],
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    required: [true, "A course must have a location"],
    trim: true,
  },
  greenFees: {
    type: Number,
    required: [true, "A course must have a fee"],
  },
  slopeRating: {
    type: Number,
    default: 100,
  },
  description: {
    type: String,
    trim: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
