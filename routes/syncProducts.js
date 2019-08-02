const express = require("express");
const xmlToJson = require("xml-to-json-stream");
const parser = xmlToJson({ attributeMode: false });
const request = require("request");
const router = express.Router();
const { Product } = require("../models/product");

router.post("/", (req, res) => {
  const data = getProducts();
  // syncData(Product, data);
  res.send("success");
});

const dropCollection = Model => {
  Model.remove({}, function(err) {
    console.log(`collection dropped`);
  });
};

const deleteProductsByFlag = async flag => {
  const result = await Product.deleteMany({ flag });
  if (result) console.log(`products removed`);
};

const getProducts = () => {
  const options = {
    host:
      "http://www.taminmall.com/nep/api/econnect/inventory.list.jsp?apikey=qeo3EeRuoIs83w41LMnwrrOi611lsP12NT57w3&Category-Main=8",
    port: 443,
    path: "",
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log("Sync started.");
  // dropCollection(Product);
  deleteProductsByFlag("nikrad");
  for (let i = 0; i < 50; i++) {
    setTimeout(function() {
      request.get(
        `http://www.taminmall.com/nep/api/econnect/inventory.list.jsp?apikey=qeo3EeRuoIs83w41LMnwrrOi611lsP12NT57w3&fetchItemImages=1&Category-Main=${i}`,
        options,
        (err, res, body) => {
          if (err) console.log(err);
          if (res.statusCode == 200) {
            let xml = res.body;
            parser.xmlToJson(xml, (err, json) => {
              if (err) console.log(err);

              let products = [];
              const obj = json.packet.data;
              Object.keys(obj).map((item, i) => {
                const pro = {
                  proCode: obj[item].ID,
                  marketCode: obj[item].Code,
                  name: obj[item].Title,
                  description: obj[item].Summary,
                  tradeBuyingPrice: obj[item]["Price-eShop"],
                  retailStoreStock: obj[item]["Quantity-Control"],
                  img: obj[item]["image-main"],
                  flag: "nikrad"
                };
                products.push(pro);
                console.log(pro.marketCode);
              });
              addCode(products, i);
              if (i == 49) console.log("Sync completed.");
            });
          }
        }
      );
    }, 5000 * i + 2000);
  }
};

const addCode = async (pros, i) =>
  Product.insertMany(pros, function(error, docs) {
    if (error) console.log(error);
    console.log(`Inserting "${pros.length}" items of category No. "${i}"`);
  });

module.exports = router;
