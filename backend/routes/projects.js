const express = require("express");
const router = express.Router();

const ProjectController = require("../controllers/projects")

router.get("/getallprojects", ProjectController.All);
router.get("/getallprojects/:userid", ProjectController.AllById);
router.get("/getprojectbyid/:projectid", ProjectController.GetOneById);

router.post("/createproject", ProjectController.Create);

module.exports = router;