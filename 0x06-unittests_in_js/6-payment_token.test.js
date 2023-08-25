const { assert } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct data for success case', function (done) {
    // Call the function with success set to true
    const successPromise = getPaymentTokenFromAPI(true);

    // Use then() to handle the resolved promise
    successPromise.then(result => {
      assert.deepEqual(result, { data: 'Successful response from the API' });
      done(); // Call done to indicate test completion
    });
  });
});
