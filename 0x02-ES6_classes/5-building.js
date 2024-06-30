export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqrt must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error(`${this.constructor.name} must implement evacuationWarningMessage`);
  }
}
