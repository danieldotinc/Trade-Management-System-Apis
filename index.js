const express = require("express");
const winston = require("winston");
const app = express();

require("./startup/logging");
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 4030;
const server = app.listen(port, winston.info(`Listening on ${port} ...`));

module.exports = server;
