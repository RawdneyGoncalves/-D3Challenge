const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:8080"
  })
);
const PORT = process.env.PORT || 5000;
//middllers
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  db.insertUser(1000, 2000);
  res.render("index");
});

covidMorteInfectados = [
  { id: 1, mortes: 4098, infectados: 1130000 },
  { id: 2, mortes: 3029, infectados: 868029 },
  { id: 3, mortes: 5865, infectados: 2520000 },
  { id: 4, mortes: 7754, infectados: 2540000 },
  { id: 5, mortes: 7748, infectados: 2510000 },
  { id: 6, mortes: 6663, infectados: 2520000 }
];

app.get("/resultado/:id", (req, res) => {
  const { id } = req.params;

  const selectedDay = covidMorteInfectados.find(
    (item) => item.id === Number(id)
  );
  let calculo;
  if (selectedDay) {
    calculo = (selectedDay.mortes / selectedDay.infectados) * 100;
  }
  
  if (!selectedDay) {
    return res.send({
      error: "Data não localizada!"
    });
  }
  return res.json(calculo);
});


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

const http = require("http");
const server = http.createServer(function (request, response) {
  response.setHeader("Acess-Control-Allow-Origin", "*");
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(covidMorteInfectados);
  response.end();
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
