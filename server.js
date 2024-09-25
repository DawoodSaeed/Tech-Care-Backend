require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

require("./startup/mongodb")();
require("./startup/routes")(app);
const logger = require("./startup/logger");

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () =>
  logger.info(`Server has started listening at port: ${port}`)
);

server.on("error", (e) => {
  // If the address in the use.
  if (e.code === "EADDRINUSE") {
    console.error("Address in use, retrying...");
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  } else {
    console.log("Server can not be started.");
  }
});
