const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { Person } = require("../models/person");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const persons = await Person.find();
  res.send(persons);
});

router.post("/", auth, async (req, res) => {
  const person = new Person(req.body);
  await person.save();
  res.send(person);
});

router.put("/:id", auth, async (req, res) => {
  const person = await Person.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(person);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const person = await Person.findByIdAndRemove(req.params.id);
  if (!person)
    return res.status(404).send("The person with given id not found!");
  res.send(person);
});

router.get("/:id", async (req, res) => {
  const person = await Person.findById(req.params.id);
  if (!person)
    return res.status(404).send("The person with given id not found!");
  res.send(person);
});

module.exports = router;
