import { Cars } from "./Cars.js";

export class Tesla extends Cars {
  static MODEL = "Tesla";

  constructor(model, color, type, fuel) {
    super(model, color, type, fuel);
  }

  ladet() {
    console.log(this.model + " ladet");
  }
}
