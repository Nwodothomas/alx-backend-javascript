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

describe('/login endpoint', function () {
  it('POST /login with userName should return Welcome :username', function (done) {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: true,
        body: { userName: 'Betty' }
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});

describe('/available_payments endpoint', function () {
  it('GET /available_payments should return the expected object', function (done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
