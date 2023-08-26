const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', function () {
  let server;

  before(function (done) {
    server = app.listen(7865, () => {
      console.log('Server started on port 7865');
      done();
    });
  });

  after(function () {
    server.close();
  });

  it('Correct status code?', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', function (done) {
    // Add any additional tests here if needed
    done();
  });
});

describe('Cart page', function () {
  it('Correct status code when :id is a number?', function (done) {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', function (done) {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
