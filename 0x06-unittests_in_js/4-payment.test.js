const { assert } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM type and stub the result', function () {
    // Stub Utils.calculateNumber to always return the same number (e.g., 10)
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to capture the message
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertions
    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');

    // Restore the stub and spy after the test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
