var express = require("express");
const VenueController = require("../controllers/venueController");
var router = express.Router();

router.post("/", VenueController.store);
router.get("/", VenueController.findAll);
router.get("/:id", VenueController.getById);
router.put("/:id", VenueController.update);
router.delete("/:id", VenueController.delete);

module.exports = router;
