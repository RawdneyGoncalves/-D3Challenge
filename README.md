# -D3Challenge
Foi desenvolvido uma API com os dados dos respectivos dias

Detalhes técnicos: 
foi usado o express para criar o server, 
foi criado um servidor com a função de requisição e resposta(Consulta API) 
foi criado um conjunto de dados para ser verificado ao passar o ID

Como testar a aplicação? 
deve-se baixar um  API client para  testar a aplicação, recomendo duas: Postaman ou Insomnia, ou simplesmente pode testar usando o endereço:  http://localhost:5000 (EM DESENVOLVIMENTO).
configurar no Método GET e inserir a API: 
      http://localhost:5000/ID
      ID = dia, irá retornar os respectivos números de infectados e respectivas mortes
      exemplo: 
       http://localhost:5000/1 //  http://localhost:5000/2 (etc).


A aplicação foi desenvolvida em NODE, terá que baixar ás dependencias das ferramentas usadas: 
npm install //  yarn start


estou desenvolvendo um pequeno painel que irá ser consumido da API 

Front-end básico: 
Foram corrigidos os erros de input, com o bloqueio de caracteres especiais, 
Link do que eu usei para verificar as keys bloqueadas: https://keycode.info/
somente um painel básico para testar a API via html, é bem mais rápido e agil do que testar o código no terminal ;)



## Retrospectiva do código, entendo um pouco sobre terminologia: 

# Uma característica importante de uma doença infecciosa, particularmente aquela causada por um novo patógeno como oSARS-CoV-2, 
é sua gravidade, cuja medida final é sua capacidade de causar a morte. As taxas de mortalidade nos ajudam a entender a gravidade 
de uma doença, identificar populações em risco e avaliar a qualidade dos cuidados de saúde.

Existem duas medidas usadas para avaliar a proporção de indivíduos infectados com desfecho fatal. O primeiro é a taxa de mortalidade por infecção (Infection Fatality Ratio – IFR, em inglês), que estima a proporção de mortes em meio a todos os indivíduos 
infectados. O segundo é a taxa de letalidade (Case Fatality Ratio – CFR, em inglês), que estima a proporção de mortes em meio 
aos casos confirmados identificados.

Para medir a IFR com precisão, deve-se ter conhecimento do quadro completo do número de infecções e mortes causadas pela doença. Consequentemente, neste estágio inicial da pandemia, a maioria das estimativas das taxas de mortalidade se baseou nos casos 
detectados por meio de vigilância e foi calculada usando métodos brutos, dando origem a estimativas amplamente variáveis da CFR 
por país: desde menos de 0,1% a mais de 25%.

## Como calcular a CFR

A Taxa de letalidade (CFR) é a proporção de indivíduos diagnosticados com uma determinada doença que morrem dessa doença 
e, portanto, é uma medida de gravidade em meio aos casos detectados:

Taxa de letalidade (CFR, em %) = (Número de mortes pela doença / Número de casos confirmados da doença) x 100

# Premissa 1: A probabilidade de detecção de casos e mortes é uniforme ao longo do surto

No início de um surto, a vigilância tende a se concentrar mais nos pacientes sintomáticos que procuram atendimento, de modo que os 
casos mais leves e assintomáticos têm menor probabilidade de serem detectados, levando à superestimação da CFR. Essa superestimação pode diminuir à medida que aumentam os testes e a detecção ativa de casos. Um método para abordar isso é remover da análise os casos que ocorreram antes do estabelecimento de uma vigilância robusta, que inclui a aplicação de claras definições de caso.

# Premissa 2: Todos os casos detectados foram resolvidos (ou seja, os casos relatados se recuperaram ou morreram)

Durante uma epidemia em curso, alguns dos casos ativos já detectados podem subsequentemente vir a falecer, levando à subestimação da CFR estimada antes da morte deles. Esse efeito é acentuado nas epidemias de crescimento rápido (por exemplo, durante 
a fase de crescimento exponencial da COVID-19)
