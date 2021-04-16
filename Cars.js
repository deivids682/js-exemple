
export class Cars {
  static WHEELS_COUNT = 4;

  constructor(model, color, type, fuel) {
    this.color = color;
    this.type = type;
    this.fuel = fuel;
    this.model = model;
  }
}
