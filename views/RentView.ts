import * as readline from 'readline';
import Rent from '../models/Rent';
  
class RentView {
  private readLine: readline.Interface;
  private rentIdCounter: number = 1;
  
  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  
  async askForRentDetails(): Promise<Rent> {
    return new Promise((resolve) => {
      this.readLine.question('Client Id: ', (clientId) => {
        this.readLine.question('Car Id: ', (carId) => {
          this.readLine.question('Start date (AAAA-MM-DD): ', (startDate) => {
            this.readLine.question('End date (AAAA-MM-DD): ', (endDate) => {
              const rent: Rent = new Rent(this.rentIdCounter++, clientId, carId, startDate, endDate);
              resolve(rent)
            });
          });
        });
      });
    });
  }
  
  displayRentDetails(rent: Rent): void {
    console.log("====================")
    console.log(` ID: ${rent.getId()},\n Client: ${rent.getClientId},\n Carro: ${rent.getCarId},\n Valor: ${rent.getPrice()}`);
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
  
export default RentView;
                