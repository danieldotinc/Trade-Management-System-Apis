const mongoose = require("mongoose");

module.exports = [
  {
    _id: mongoose.Types.ObjectId("5ca9b141f9e70b05443a45cf"),
    name: "مای کیچن",
    address: "شوش خیابان فدائیان اسلام",
    city: "تهران",
    explanation: "",
    marketSector: "ظروف چینی",
    marketSectorId: mongoose.Types.ObjectId("5c8f5ec6891e3c14ecccb5a0"),
    postalCode: 1234567891,
    telephone1: 2155041770,
    telephone2: 2155041770
  },
  {
    _id: mongoose.Types.ObjectId("5cac4eee2863a11010cd2e67"),
    name: "تامین مارکتینگ",
    city: "تهران",
    marketSector: "دکوراتیو",
    marketSectorId: mongoose.Types.ObjectId("5c8f5f12891e3c14ecccb5a3"),
    telephone1: 2155041770,
    telephone2: 219988002,
    address: "شوش خیابان فدائیان اسلام کوچه هفتم پلاک 9",
    postalCode: 1234567891,
    explanation: ""
  }
];
