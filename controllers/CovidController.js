const covidMorteInfectados = [
    { id: 1, mortes: 4098, infectados: 1130000, recuperados:123213 },
    { id: 2, mortes: 3029, infectados: 868029, recuperados: 123213},
    { id: 3, mortes: 5865, infectados: 2520000, recuperados: 123123 },
    { id: 4, mortes: 7754, infectados: 2540000, recuperados:123123 },
    { id: 5, mortes: 7748, infectados: 2510000, recuperados:12312321 },
    { id: 6, mortes: 6663, infectados: 2520000, recuperados: 91283321}
  ];

exports.getDay = function(req, res) {
    const { id } = req.params;
    console.log(id)

    for(var i = 0; i < id;i++){
        console.log((covidMorteInfectados[i].mortes / covidMorteInfectados[i].infectados + covidMorteInfectados[i].recuperados) * 100)
      }

    if (id <= 0) {
      return res.send({
        error: "Data não localizada!"
      });
    }


    return res.json("Consulta realizada");
};