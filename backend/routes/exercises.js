const router = require("express").Router(); // routeumuzu require
let Exercise = require("../models/exercise.model"); //yarattığımız modeli require

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises)) // routetaki exercise'ları bulup jsona dönüştürme işlemleri
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const companyName = req.body.companyName;
  const country = req.body.country;
  const companyNumber = Number(req.body.companyNumber);
  const companyWebsite = req.body.companyWebsite; // girilen yeni company bilgilerini const olarak signlıyoruz

  const NewExercise = new Exercise({
    companyName,
    country,
    companyNumber,
    companyWebsite,
  });
  NewExercise.save()
    .then(() => res.json("Exercise eklendi")) //promise yapımız
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id) //get request
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise silindi."))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.companyName = req.body.companyName; //bilgileri alıp var olan bilgilere signlıyoruz
      exercise.country = req.body.country;
      exercise.companyNumber = Number(req.body.companyNumber);
      exercise.companyWebsite = req.body.companyWebsite;
      exercise
        .save()

        .then(() => res.json("Exercise güncellendi!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
