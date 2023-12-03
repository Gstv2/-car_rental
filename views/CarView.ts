import * as readline from 'readline';
import Car from '../models/Car';

class CarView {
  private readLine: readline.Interface;
  private carIdCounter: number = 1;

  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async askForCarDetails(): Promise<Car> {
    return new Promise((resolve) => {
      this.readLine.question("Digite a marca do carro: ", (brand) => {
        this.readLine.question("Digite o modelo do carro: ", (model) => {
          this.readLine.question("Digite o ano do carro: ", (year) => {
            this.readLine.question("Digite a placa do carro: ", (plate) => {
              this.readLine.question("Digite o preço por dia de aluguel: ", (pricePerDay) => {
                const car: Car = new Car(brand, model, parseInt(year), plate, parseFloat(pricePerDay), true);
                resolve(car);
              });
            });
          });
        });
      });
    });
  }


  displayCarDetails(car: Car): void {
    console.log("====================")
    console.log(` ID: ${car.getId()}\n Marca: ${car.getBrand()}\n Modelo: ${car.getModel()}\n Preço : ${car.getPricePerDay()}`);
    console.log("====================")
  }


  async askToContinue(message: string): Promise<void> {
    return new Promise((resolve) => {
      this.readLine.question(message, () => {
        resolve();
      });
    });
  }

  close(): void {
    this.readLine.close();
  }
}

export default CarView;
