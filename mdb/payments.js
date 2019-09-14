const mongoose = require("mongoose");

module.exports = [
  {
    _id: mongoose.Types.ObjectId("5d7d023a7886d012c8648c33"),
    accountType: "حساب بانک",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d118fb28e1f844b4a46"),
    account: "بانك ملت 1926258845 جاري (شعبه قائم زنجان ) سعيد شمس",
    accountId: mongoose.Types.ObjectId("5cce7a8207fb341348c93102"),
    invoice: "فاکتور فروش مربوط به محسن شمس",
    invoiceId: mongoose.Types.ObjectId("5d7d020a7886d012c8648c32"),
    person: "محسن شمس",
    personId: mongoose.Types.ObjectId("5d7a8ed5fabfe01afc47d24d"),
    price: 2780000,
    type: "دریافت",
    status: "انجام شده",
    date: "۱۳۹۸-۰۶-۲۳ ۱۹:۳۷:۳۸",
    update: "۱۳۹۸-۰۶-۲۳ ۱۹:۳۷:۳۸"
  },
  {
    d: mongoose.Types.ObjectId("5d7d02707886d012c8648c34"),
    accountType: "حساب بانک",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d118fb28e1f844b4a46"),
    account: "بانك ملت 8285140784 ( قرض الحسنه ) ملت بازار بلور ايران",
    accountId: mongoose.Types.ObjectId("5cce7ac407fb341348c93104"),
    invoice: "فاکتور خرید مربوط به سعید شمس",
    invoiceId: mongoose.Types.ObjectId("5d7a8f5efabfe01afc47d24e"),
    person: "سعید شمس",
    personId: mongoose.Types.ObjectId("5d7a8e03fabfe01afc47d24c"),
    price: 4070000,
    type: "پرداخت",
    status: "در حال انجام",
    date: "۱۳۹۸-۰۶-۲۳ ۱۹:۳۸:۳۲",
    update: "۱۳۹۸-۰۶-۲۳ ۱۹:۳۸:۳۲"
  }
];
