const { expect } = require('chai');
const utils = require('./utils');

it('Should add two numbers', () => {
  const res = utils.add(1, 3);

  expect(res).to.be.equal(4);
  expect(res).to.not.equal(5);
  expect(res).to.be.a('number');

  expect({ name: 'Andrii' })
    .to.deep.equal({ name: 'Andrii' })
    .to.include({ name: 'Andrii' });
  expect([2,3,4]).to.include(3);
});

it('Should verify first and last names are set', () => {
  const user = { name: 'Andrii', age: 25 };
  const res = utils.setName(user, 'Andrii Kit');

  expect(user).to.equal(res);
  expect(user).to.include({ name: 'Andrii' });
});

it('Should verify async test', (done) => {
  utils.aSyncAdd(1, 1, (sum) => {
    expect(sum).to.be.equal(2);
    expect(sum).to.be.a('number');
    done();
  });
});
