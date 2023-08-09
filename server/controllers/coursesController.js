const Course = require("../models/courseModel");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      status: "success",
      length: courses.length,
      data: {
        courses: courses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { courses: course },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(200).json({
      status: "success",
      data: { newCourse },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
