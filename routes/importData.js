const express = require("express");
const router = express.Router();
const accountLevelData = require("../mdb/accountlevels");
const accountData = require("../mdb/accounts");
const accountTypeData = require("../mdb/accounttypes");
const categoryData = require("../mdb/categories");
const colorData = require("../mdb/colors");
const companyData = require("../mdb/companies");
const groupData = require("../mdb/groups");
const identityData = require("../mdb/identities");
const marketSectorData = require("../mdb/marketsectors");
const officeSectorData = require("../mdb/officesectors");
const materialData = require("../mdb/materials");
const paymentData = require("../mdb/payments");
const personData = require("../mdb/people");
const productData = require("../mdb/products");
const settingData = require("../mdb/settings");
const subCategoryData = require("../mdb/subcategories");
const supplierData = require("../mdb/suppliers");
const { AccountLevel } = require("../models/accountLevel");
const { Account } = require("../models/account");
const { AccountType } = require("../models/accountType");
const { Category } = require("../models/category");
const { Color } = require("../models/color");
const { Company } = require("../models/company");
const { Group } = require("../models/group");
const { Identity } = require("../models/identity");
const { MarketSector } = require("../models/marketSector");
const { OfficeSector } = require("../models/officeSector");
const { Material } = require("../models/material");
const { Payment } = require("../models/payment");
const { Person } = require("../models/person");
const { Product } = require("../models/product");
const { Setting } = require("../models/setting");
const { SubCategory } = require("../models/subCategory");
const { Supplier } = require("../models/supplier");

router.post("/", (req, res) => {
  importData(AccountLevel, accountLevelData);
  importData(Account, accountData);
  importData(AccountType, accountTypeData);
  importData(Category, categoryData);
  importData(Color, colorData);
  importData(Company, companyData);
  importData(Group, groupData);
  importData(Identity, identityData);
  importData(MarketSector, marketSectorData);
  importData(OfficeSector, officeSectorData);
  importData(Material, materialData);
  importData(Payment, paymentData);
  importData(Person, personData);
  importData(Product, productData);
  importData(Setting, settingData);
  importData(SubCategory, subCategoryData);
  importData(Supplier, supplierData);
  res.send("success");
});

const dropCollection = Model => {
  Model.remove({}, function(err) {
    console.log(`collection dropped`);
  });
};

const importData = async (Model, data) => {
  const test = Model.find();
  if (!test[0]) dropCollection(Model);
  for (let item of data) {
    const model = new Model(item);
    await model.save();
  }
};

module.exports = router;
