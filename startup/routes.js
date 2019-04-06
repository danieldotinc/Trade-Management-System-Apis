const express = require("express");
const settings = require("../routes/settings");
const products = require("../routes/products");
const categories = require("../routes/categories");
const marketPlaces = require("../routes/marketPlaces");
const persons = require("../routes/persons");
const identities = require("../routes/identities");
const companies = require("../routes/companies");
const marketSectors = require("../routes/marketSectors");
const officeSectors = require("../routes/officeSectors");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/settings", settings);
  app.use("/api/products", products);
  app.use("/api/categories", categories);
  app.use("/api/marketPlaces", marketPlaces);
  app.use("/api/persons", persons);
  app.use("/api/identities", identities);
  app.use("/api/companies", companies);
  app.use("/api/marketSectors", marketSectors);
  app.use("/api/officeSectors", officeSectors);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
};
