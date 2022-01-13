const express = require("express");
const app = express();
const cors = require("cors");

const Controller = require("./controllers/CovidController");

app.use(
  cors({
    origin: "http://localhost:5000"
  })
);
//crio uma váriavel ambiente caso exista.
//engine do html
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
//CALCULO IRF NÃO USAVEL
covidMorteInfectados = [
  { id: 1, mortes: 4098, infectados: 1130000, recuperados: 123213 },
  { id: 2, mortes: 3029, infectados: 868029, recuperados: 123213 },
  { id: 3, mortes: 5865, infectados: 2520000, recuperados: 123123 },
  { id: 4, mortes: 7754, infectados: 2540000, recuperados: 123123 },
  { id: 5, mortes: 7748, infectados: 2510000, recuperados: 12312321 },
  { id: 6, mortes: 6663, infectados: 2520000, recuperados: 91283321 }
];

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