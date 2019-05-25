const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const multer = require("multer");
const express = require("express");

const { Product } = require("../models/product");
const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../store-manager-api/build");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.toString().replace(new RegExp(" ", "g"), ""));
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
    const lastProduct = await Product.find()
      .sort({ _id: -1 })
      .limit(1);

    if (
      (lastProduct[0] && lastProduct[0].diverseCode == "0") ||
      (lastProduct[0] && lastProduct[0].diverseCode)
    ) {
      newReq.diverseCode = parseInt(lastProduct[0].diverseCode) + 1;
    } else {
      newReq.diverseCode = 0;
    }

    const lastProCode = await Product.find()
      .sort({ proCode: -1 })
      .limit(1);

    if (
      (lastProCode[0] && lastProCode[0].proCode == "0") ||
      (lastProCode[0] && lastProCode[0].proCode)
    ) {
      newReq.proCode = parseInt(lastProCode[0].proCode) + 1;
    } else {
      newReq.proCode = 0;
    }

    newReq.imgs = newReq.imgs.toString().split(",");
    for (let i = 0; i < newReq.imgs.length; i++) {
      newReq.imgs[i] = newReq.imgs[i]
        .toString()
        .replace(new RegExp(" ", "g"), "");
    }
    newReq.img =
      newReq.img && newReq.img.toString().replace(new RegExp(" ", "g"), "");
    const product = new Product(newReq);
    await product.save();
    res.send(product);
  });
});

router.post("/diversity", auth, async (req, res) => {
  const lastProduct = await Product.find()
    .sort({ _id: -1 })
    .limit(1);
  const newReq = { ...req.body };
  if (lastProduct[0].diverseCode == "0" || lastProduct[0].diverseCode) {
    newReq.diverseCode = parseInt(lastProduct[0].diverseCode) + 1;
  } else {
    newReq.diverseCode = 0;
  }

  const product = new Product(newReq);
  await product.save();
  res.send(product);
});

router.put("/:id", [auth, validateObjectId], (req, res) => {
  upload(req, res, async err => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const newReq = { ...req.body };
    newReq.imgs = newReq.imgs.toString().split(",");
    for (let i = 0; i < newReq.imgs.length; i++) {
      newReq.imgs[i] = newReq.imgs[i]
        .toString()
        .replace(new RegExp(" ", "g"), "");
    }
    newReq.img =
      newReq.img && newReq.img.toString().replace(new RegExp(" ", "g"), "");
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
