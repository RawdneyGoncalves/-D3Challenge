const express = require("express");
const app = express();
const cors = require("cors");
const Controller = require("./controllers/CovidController");

app.use(
  cors({
    origin: "http://localhost:5000"
  })
);


app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ddf/:id", Controller.getDay);

app.get("/:id", (req, res) => {
  const { id } = req.params;

  const selectedDay = covidMorteInfectados.find(
    (item) => item.id === Number(id)
  );

  if (!selectedDay) {
    return res.send({
      error: "Data não localizada!"
    });
  }

  return res.json(selectedDay);
});

module.exports = app
