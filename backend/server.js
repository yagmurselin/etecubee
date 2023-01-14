const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //database bağlantısı.

require("dotenv").config();

const app = express(); //express server create işlemi, port belirleme.
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //sending-receiving işlemleri için json parse işlemi.

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database baglantisi basarili."); // bağlantı sağlanmış ise bildir.
});

const exercisesRouter = require("./routes/exercises"); //gerekli dosyaları importluyoruz
const companiesRouter = require("./routes/companies");

app.use("/exercises", exercisesRouter); //dosyaları kullanmak için
app.use("/companies", companiesRouter);

app.listen(port, () => {
  console.log(`Server port ${port} de calisiyor.`);
});
