const request = require("supertest");
const app = require('./server')

describe('Testar Meu ap server', ()=> {
it('should get main route', async()=> {
    const res = await request(app).get('/')

    expect(res.body).status(200)

})

});

