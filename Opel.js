import { Cars } from "./Cars.js";

class Opel extends Cars {
  static MODEL = "OPEL";

  constructor(model, color, type, fuel) {
    super(model, color, type, fuel);
  }

  ruse() {
    console.log(this.model + " ruse");
  }
}
