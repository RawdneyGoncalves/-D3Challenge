//Arrays de dados
//calculo CRF em curso
const covidMorteInfectados = [
    { id: 1, mortes: 4129, infectados: 1126443, recuperados:1122314 },
    { id: 2, mortes: 3055, infectados: 869323, recuperados: 866268},
    { id: 3, mortes: 5897, infectados: 2524240, recuperados: 2518343 },
    { id: 4, mortes: 7777, infectados: 2543224, recuperados:2535447 },
    { id: 5, mortes: 7774, infectados: 2513232, recuperados: 2505458},
    { id: 6, mortes: 6707, infectados: 2557219, recuperados: 2550512}
  ];
//exporto o getDay  pra jogar no server(Juntamente com o cálculo )
exports.getDay = function(req, res) {
    const { id } = req.params;
    console.log(id)
let resultados = []
    for(var i = 0; i < id;i++){
      resultados[i] = (covidMorteInfectados[i].mortes / covidMorteInfectados[i].mortes + covidMorteInfectados[i].recuperados) * 100
       // console.log((covidMorteInfectados[i].mortes / covidMorteInfectados[i].infectados + covidMorteInfectados[i].recuperados) * 100)
      }

    if (id <= 0) {
      return res.send({
        error: "Data não localizada!"
      });
    }


    return res.json(resultados);
};