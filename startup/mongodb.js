const mongoose = require("mongoose");
const logger = require("./logger");

const MONGODB_URL = process.env.MONGODB_URL;

module.exports = function () {
  // ################## (5). MONGOOSE CONNECTION #########################
  mongoose.connect(MONGODB_URL, {});
  mongoose.connection.on("connected", () => {
    logger.info("Connected to mongodb successfully");
  });
  mongoose.connection.on("error", () => {
    logger.error("Error connecting to the mongodb");
  });
};
