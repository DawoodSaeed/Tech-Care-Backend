const mongoose = require("mongoose");
const express = require("express");

const Patient = require("../models/Patient");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hi There from patient route");
});

module.exports = router;
