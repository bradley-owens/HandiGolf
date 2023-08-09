const express = require("express");
const {
  getCourse,
  getAllCourses,
  createCourse,
} = require("../controllers/coursesController");
const router = express.Router();

router.route("/").get(getAllCourses).post(createCourse);
router.route("/:id").get(getCourse);

module.exports = router;
