const { expect } = require('chai');

describe('App', () => {

  it.only('Should call spy correctly', function* gen() {
    const spy = this.sandbox.spy();
    spy();
    expect(spy).calledOnce;
  });
});
