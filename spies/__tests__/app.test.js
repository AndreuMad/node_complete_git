const { expect } = require('chai');
const rewire = require('rewire');

const app = rewire('../app');

describe('App', () => {
  it('Should call spy correctly', function* gen() {
    const spy = this.sandbox.spy();
    spy('Andrii', 25);
    expect(spy).calledOnce;
    expect(spy).calledWith('Andrii', 25);
  });

  it('Should call saveUser with correct arguments', function* () {
    const email = 'email@example.com';
    const password = 12345;
    const db = {
      saveUser: this.sandbox.spy()
    };

    app.__set__('db', db);

    app.handleSignUp(email, password);
    expect(db.saveUser).calledWith({ email, password });
  });
});
