const mongoose = require("mongoose");

module.exports = [
  {
    _id: mongoose.Types.ObjectId("5ccd7f45011724193cd84a44"),
    code: "1",
    name: "دارائی ها",
    description: "سرگروه 1",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a45")
  },
  {
    _id: mongoose.Types.ObjectId("5ccd8564cac8361320d8ae4b"),
    code: "101",
    name: "موجودی نقد و بانک",
    description: "موجودی نقد و بانک",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5cced552e918fc1924321441")
  },
  {
    _id: mongoose.Types.ObjectId("5ccd885b46bcbe1eb8804e1a"),
    code: "102",
    name: "اسناد در جريان وصول",
    description: "اسناد در جريان وصول",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f84554a45")
  },
  {
    _id: mongoose.Types.ObjectId("5cce6bde1da6c21a388bdcf5"),
    code: "2",
    name: "بدهی ها",
    description: "بدهی ها",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce6c7bec5d451a543cbb17"),
    code: "3",
    name: "حقوق صاحبان سهام",
    description: "حقوق صاحبان سهام",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce6c9fec5d451a543cbb18"),
    code: "4",
    name: "حساب های سود و زیانی",
    description: "حساب های سود و زیانی",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce6cbcec5d451a543cbb19"),
    code: "5",
    name: "حساب های کنترلی",
    description: "حساب های کنترلی",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a42")
  },
  {
    _id: mongoose.Types.ObjectId("5cce6cecec5d451a543cbb1a"),
    code: "201",
    name: "اسناد پرداختنی",
    description: "اسناد پرداختنی",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce6d13ec5d451a543cbb1b"),
    code: "202",
    name: "حساب های پرداختنی",
    description: "حساب های پرداختنی",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce75457fb2d717e0d7ab25"),
    code: "101001",
    name: "صندوق",
    description: "صندوق",
    accountLevel: "معین",
    accountLevelId: mongoose.Types.ObjectId("5ccd4cdb8fb28e1f844b4a43"),
    accountType: "صندوق",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a45")
  },
  {
    _id: mongoose.Types.ObjectId("5cce77a2dd009e1b40badf7d"),
    code: "301",
    name: "سرمایه",
    description: "سرمایه",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce77c4dd009e1b40badf7e"),
    code: "302",
    name: "سود و زیان",
    description: "سود و زیان",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a42")
  },
  {
    _id: mongoose.Types.ObjectId("5cce77f9dd009e1b40badf7f"),
    code: "302001",
    name: "سود و زیان جاری",
    description: "سود و زیان جاری",
    accountLevel: "معین",
    accountLevelId: mongoose.Types.ObjectId("5ccd4cdb8fb28e1f844b4a43"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a42")
  },
  {
    _id: mongoose.Types.ObjectId("5cce79b607fb341348c930ff"),
    code: "101001001",
    name: "صندوق مرکزی تامین مال",
    description: "صندوق مرکزی تامین مال",
    accountLevel: "تفصیلی",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ce18fb28e1f844b4a44"),
    accountType: "صندوق",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a45")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7a0007fb341348c93100"),
    code: "101001002",
    name: "صندوق ارزی تامین مال",
    description: "صندوق ارزی تامین مال",
    accountLevel: "تفصیلی",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ce18fb28e1f844b4a44"),
    accountType: "صندوق",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a45")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7a5507fb341348c93101"),
    code: "101002",
    name: "بانک ها",
    description: "بانک ها",
    accountLevel: "معین",
    accountLevelId: mongoose.Types.ObjectId("5ccd4cdb8fb28e1f844b4a43"),
    accountType: "حساب بانک",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d118fb28e1f844b4a46")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7a8207fb341348c93102"),
    code: "101002001",
    name: "بانك ملت 1926258845 جاري (شعبه قائم زنجان ) سعيد شمس",
    description: "بانك ملت",
    accountLevel: "تفصیلی",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ce18fb28e1f844b4a44"),
    accountType: "حساب بانک",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d118fb28e1f844b4a46")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7aa307fb341348c93103"),
    code: "101002002",
    name: "بانك ملت 4400231833 سپرده كوتاه مدت (شعبه سعدي زنجان) سعيد شمس",
    description:
      "بانك ملت 4400231833 سپرده كوتاه مدت (شعبه سعدي زنجان) سعيد شمس",
    accountLevel: "تفصیلی",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ce18fb28e1f844b4a44"),
    accountType: "حساب بانک",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d118fb28e1f844b4a46")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7ac407fb341348c93104"),
    code: "101002003",
    name: "بانك ملت 8285140784 ( قرض الحسنه ) ملت بازار بلور ايران",
    description: "بانك ملت 8285140784 ( قرض الحسنه ) ملت بازار بلور ايران",
    accountLevel: "تفصیلی",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ce18fb28e1f844b4a44"),
    accountType: "حساب بانک",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d118fb28e1f844b4a46")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7af107fb341348c93105"),
    code: "101003",
    name: "تنخواه گردانان",
    description: "تنخواه گردانان",
    accountLevel: "معین",
    accountLevelId: mongoose.Types.ObjectId("5ccd4cdb8fb28e1f844b4a43"),
    accountType: "تنخواه گردان",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d278fb28e1f844b4a47")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7b1407fb341348c93106"),
    code: "101003001",
    name: "تنخواه گردان پذيراي",
    description: "تنخواه گردان پذيراي",
    accountLevel: "تفصیلی",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ce18fb28e1f844b4a44"),
    accountType: "تنخواه گردان",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d278fb28e1f844b4a47")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7b2e07fb341348c93107"),
    code: "101003002",
    name: "تنخواه گردان ساير",
    description: "تنخواه گردان ساير",
    accountLevel: "تفصیلی",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ce18fb28e1f844b4a44"),
    accountType: "تنخواه گردان",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d278fb28e1f844b4a47")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7b8107fb341348c93108"),
    code: "401",
    name: "هزینه ها",
    description: "هزینه ها",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7b9607fb341348c93109"),
    code: "402",
    name: "درآمد ها",
    description: "درآمد ها",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7bb507fb341348c9310a"),
    code: "403",
    name: "فروش",
    description: "فروش",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5cce7be707fb341348c9310b"),
    code: "501",
    name: "افتتاحیه",
    description: "افتتاحیه",
    accountLevel: "کل",
    accountLevelId: mongoose.Types.ObjectId("5ccd4ccb8fb28e1f844b4a42"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  },
  {
    _id: mongoose.Types.ObjectId("5ccec25d268e971adc131374"),
    code: "502",
    name: "اختتامیه",
    description: "اختتامیه",
    accountLevel: "گروه",
    accountLevelId: mongoose.Types.ObjectId("5ccd4c5dd966e115a432d421"),
    accountType: "",
    accountTypeId: mongoose.Types.ObjectId("5ccd4d088fb28e1f844b4a43")
  }
];
