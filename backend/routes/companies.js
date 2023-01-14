const router = require("express").Router(); //oluşturduğumuz route
let Company = require("../models/company.model"); //oluşturduğumuz mongoose modelini getiriyoruz.

router.route("/").get((req, res) => {
  Company.find() //database'deki tüm companyleri bize getirir.
    .then((companies) => res.json(companies))
    .catch((err) => res.status(400).json("Error:" + err));
});
router.route("/add").post((req, res) => {
  //http post requestleri işlemek için
  const companyName = req.body.companyName;

  const newCompany = new Company({ companyName }); //yeni company oluşturmak için

  newCompany
    .save() //kaydetme işlemi
    .then(() => res.json("Sirket eklendi!"))
    .catch((err) => res.status(400).json("Error" + err));
});
module.exports = router;
