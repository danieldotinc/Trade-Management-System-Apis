const csv = require("fast-csv");
const fs = require("fs");
const express = require("express");
const { Product } = require("./models/product");
const csvfile = __dirname + "/data.csv";
const stream = fs.createReadStream(csvfile);
const router = express.Router();

const arr_pro = [];

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
        marketCode: data[10],
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
      arr_pro.push(pro);
    })
    .on("end", () => {
      console.log("End of file import");
      startSaving();
    });

  stream.pipe(csvStream);
  res.send("Data imported successfully.");
});

const startSaving = () => {
  for (let i = 0; i < arr_pro.length; i++) {
    setTimeout(function() {
      addCode(arr_pro[i]);
    }, 1500 * i + 2000);
  }
};

const addCode = async pro => {
  const lastProduct = await Product.find()
    .sort({ _id: -1 })
    .limit(1);

  if (
    (lastProduct[0] && lastProduct[0].diverseCode == "0") ||
    (lastProduct[0] && lastProduct[0].diverseCode)
  ) {
    pro.diverseCode = parseInt(lastProduct[0].diverseCode) + 1;
  } else {
    pro.diverseCode = 0;
  }

  const nikrad = await Product.findOne({ marketCode: pro.marketCode });
  if (nikrad) {
    pro.proCode = nikrad.proCode;
  } else {
    const lastProCode = await Product.find()
      .sort({ proCode: -1 })
      .limit(1);

    if (
      (lastProCode[0] && lastProCode[0].proCode == "0") ||
      (lastProCode[0] && lastProCode[0].proCode)
    ) {
      pro.proCode = parseInt(lastProCode[0].proCode) + 1;
    } else {
      pro.proCode = 0;
    }
  }

  const item = new Product(pro);
  await item.save();
  console.log(item.marketCode);
};

module.exports = router;
