const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { Product, validate } = require("../models/product");
const router = express.Router();

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .send("Oops! Something went wrong!");
};

const upload = multer({
  dest: "../files"
});

router.get("/", auth, async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post(
  "/",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.body.file.path;
    const targetPath = path.join(__dirname, "./uploads/image.png");

    if (path.extname(req.body.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, async err => {
        if (err) return handleError(err, res);

        const product = new Product(req.body);
        await product.save();
        res.send(product);
        res
          .status(200)
          .contentType("text/plain")
          .send("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .send("Only .png files are allowed!");
      });
    }
  }
);

// router.post("/", auth, async (req, res) => {
//   // const { error } = validate(req.body);
//   // if (error) return res.status(400).send(error.details[0].message);

//   const product = new Product(req.body);
//   await product.save();
//   res.send(product);
// });

router.put("/:id", [auth, validateObjectId], async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(product);
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
