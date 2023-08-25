const { assert } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should call sendPaymentRequestToApi with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Assertions
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should call sendPaymentRequestToApi with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Assertions
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
  });
});
