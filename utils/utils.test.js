const utils = require('./utils');

it('Should add two numbers', () => {
  const res = utils.add(1, 3);

  if(res !== 4) {
    throw new Error('Expected 4, but got' + res);
  }
});
