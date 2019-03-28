const express = require("express");
const winston = require("winston");
const app = express();

require("./startup/logging");
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(3900, winston.info(`Listening on port ${3900} ...`));

module.exports = server;
