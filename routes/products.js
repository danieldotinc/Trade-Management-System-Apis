const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const multer = require("multer");

const { Product } = require("../models/product");
const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../store-manager/public");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage }).array("file");

router.get("/", auth, async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post("/", auth, (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  upload(req, res, async err => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const newReq = { ...req.body };
    newReq.imgs = newReq.imgs.split(",");
    const product = new Product(newReq);
    await product.save();
    res.send(product);
  });
});

router.put("/:id", [auth, validateObjectId], (req, res) => {
  upload(req, res, async err => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const newReq = { ...req.body };
    newReq.imgs = newReq.imgs.split(",");
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      newReq,
      { new: true }
    );
    res.send(product);
  });
});

router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product)
    return res.status(404).send("The product with given id not found!");
  res.send(product);
});

router.get("/:id", [auth, validateObjectId], async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).send("The product with given id not found!");
  res.send(product);
});

module.exports = router;
