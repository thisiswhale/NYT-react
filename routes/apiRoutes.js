var express = require("express");

var articleController = require("../controllers/articleControllers");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/api/saved", articleController.index);
// Create a new article using data passed in req.body
router.post("/api/saved/", articleController.create);
// Delete a specific quote using the id in req.params.id
router.delete("/api/saved/:id", articleController.destroy);

module.exports = router;
