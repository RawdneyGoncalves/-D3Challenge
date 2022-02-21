const request = require("supertest");
const app = require('./server')

describe('Testar Meu ap server', ()=> {
it('inserir a rota', async()=> {
    const res = await request(app).get('/')

    expect(res.body).status(200)

})

});

