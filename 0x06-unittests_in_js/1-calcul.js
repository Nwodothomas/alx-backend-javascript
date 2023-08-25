/**
 * Perform mathematical operations on two numbers based on the type.
 * @param {string} type - The type of operation (SUM, SUBTRACT, DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation or 'Error' if division by zero.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type. Use SUM, SUBTRACT, or DIVIDE.');
  }
}

module.exports = calculateNumber;
