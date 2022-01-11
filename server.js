const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
//middllers
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

covidMorteInfectados = [
  { name: "day1", mortes: 4098, infectados:  1130000},
  { name: "day2", mortes: 3029, infectados: 868029 },
  { name: "day3", mortes: 5865, infectados: 2520000},
  { name: "day4", mortes: 7754, infectados: 2540000 },
  { name: "day5", mortes: 7748, infectados: 2510000 },
  { name: "day6", mortes: 6663, infectados: 2520000}
];

const daysShow = 4

for(var i =0; i < daysShow; i++){
  console.log(`Dia ${i+1} => ${covidMorteInfectados[i].infectados} `)
}


const http = require("http");
const server = http.createServer(function (request, response) {
  response.setHeader("Acess-Control-Allow-Origin", "*");
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(carros);
  response.end();
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
