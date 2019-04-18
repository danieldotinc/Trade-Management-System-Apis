const csv = require("fast-csv");
const fs = require("fs");
const express = require("express");
const { Product } = require("./models/product");
const csvfile = __dirname + "/data.csv";
const stream = fs.createReadStream(csvfile);
const router = express.Router();

router.post("/", async (req, res) => {
  const csvStream = csv()
    .on("data", async data => {
      const pro = {
        img: data[0],
        imgs: data[1],
        category: data[2],
        categoryId: data[3],
        subCategory: data[4],
        subCategoryId: data[5],
        group: data[6],
        groupId: data[7],
        webLink: data[8],
        itemNumber: data[9],
        proCode: data[10],
        name: data[11],
        brand: data[12],
        color: data[13],
        colorId: data[14],
        material: data[15],
        materialId: data[16],
        supplier: data[17],
        supplierId: data[18],
        tradeBuyingPrice: data[19]
      };
      const item = new Product(pro);

      await item.save();
    })
    .on("end", () => {
      console.log(" End of file import");
    });

  stream.pipe(csvStream);
  res.send("Data imported successfully.");
});

module.exports = router;
