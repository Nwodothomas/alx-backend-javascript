const { assert } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM type', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(30);

    sendPaymentRequestToApi(10, 20);

    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 10, 20);

    calculateNumberStub.restore();
  });

  it('should log the result', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(30);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(10, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 30');

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
