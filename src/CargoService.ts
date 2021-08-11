interface ICargo {
  name: string;
  createdAt: Date;
  price: number;
}

export class Cargo implements ICargo {
  name: string;
  price: number;
  createdAt: Date;

  constructor(name = '', price = 0) {
    this.name = name;
    this.price = price;
    this.createdAt = new Date();
  }
}

export default class CargoService {
  static info(cargoData: Cargo): void {
    console.log(cargoData);
  }
}
