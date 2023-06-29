import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
