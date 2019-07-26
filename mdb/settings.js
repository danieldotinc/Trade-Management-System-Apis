const mongoose = require("mongoose");

module.exports = [
  {
    _id: mongoose.Types.ObjectId("5caddd0e90460e0e905fb69f"),
    valueAdded: 9,
    shippingCosts: 20000,
    wholeProfit: 10,
    retailProfit: 15,
    marketPlaceProfit: 10,
    addAction: true,
    editAction: true,
    deleteAction: false,
    processAccess: true,
    personsAccess: true,
    companiesAccess: true,
    tradeAccess: true
  }
];
