const express = require("express");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "username", "password"]));

  let users = await User.find();
  if (!users[0]) {
    user.isAdmin = true;
    user.isActive = true;
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "username"]));
});

router.get("/", auth, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.put("/:id", auth, async (req, res) => {
  const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  });
  res.send(user);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(404).send("The user with given id not found!");
  res.send(user);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("The user with given id not found!");
  res.send(user);
});

module.exports = router;
