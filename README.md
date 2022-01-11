# -D3Challenge
Foi desenvolvido uma API com os dados dos respectivos dias

Detalhes técnicos: 
foi usado o express para criar o server, 
foi criado um servidor com a função de requisição e resposta(Consulta API) 
foi criado um conjunto de dados para ser verificado ao passar o ID

Como testar a aplicação? 
deve baixar ou o Insomnia ou o POSTMAN, 
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
Link do que eu usei: https://keycode.info/
somente um painel básico para testar a API via html
