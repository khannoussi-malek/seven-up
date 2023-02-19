const express = require("express");
const router = express.Router();
const signaleController = require("../controller/signaleController");

router.post("/", signaleController.addSignale);

module.exports = router;
