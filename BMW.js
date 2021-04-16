import { Cars } from "./Cars.js";

export class BMW extends Cars {
  static MODEL = "BMW";

  constructor(model, color, type, fuel) {
    super(model, color, type, fuel);
  }

  skana() {
    console.log(this.model + " skana");
  };

  izmeshi() {
    console.log(this.model + " " + this.color + " izmeshi");
  }
}
