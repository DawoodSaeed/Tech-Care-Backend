const express = require("express");
const patientRoute = require("../routes/patients");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/v1/patients", patientRoute);
};
