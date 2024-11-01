const express = require("express");
const { createTutorial, getTutorials, updateTutorial, deleteTutorial } = require("../controllers/tutorialController");

const router = express.Router();

router.post("/tutorials", createTutorial);
router.get("/tutorials", getTutorials);
router.put("/tutorials/:id", updateTutorial);
router.delete("/tutorials/:id", deleteTutorial);

module.exports = router;