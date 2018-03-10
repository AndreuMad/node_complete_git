const request = require('supertest');
const { expect } = require('chai');
const app = require('../server').app;

it('Route "/json" works', (done) => {
  request(app)
    .get('/json')
    .expect((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).to.include({
        name: 'Andrii',
        age: 21
      });
    })
    .expect({
      name: 'Andrii',
      age: 21
    })
    .end(done);
});
