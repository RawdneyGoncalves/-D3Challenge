const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
//middllers
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

covid = [
  { name: "day1", mortes: 100, infectados: 6 },
  { name: "day2", mortes: 100, infectados: 6 },
  { name: "day3", mortes: 100, infectados: 6 },
  { name: "day4", mortes: 100, infectados: 6 },
  { name: "day5", mortes: 100, infectados: 6 },
  { name: "day6", mortes: 100, infectados: 6 },
  { name: "day7", mortes: 100, infectados: 6 },
  { name: "day8", mortes: 100, infectados: 6 }
];

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
