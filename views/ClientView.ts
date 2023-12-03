import * as readline from 'readline';
import Client from '../models/Client';
  
class ClientView {
  private readLine: readline.Interface;
  private clientIdCounter: number = 1;
  
  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  
  async askForClientDetails(): Promise<Client> {
    return new Promise((resolve) => {
      this.readLine.question("Digite o nome do cliente: ", (name) => {
        this.readLine.question("Digite o email do cliente: ", (email) => {
          this.readLine.question("Digite o telefone do cliente: ", (phone) => {
            this.readLine.question("Digite o CPF do cliente: ", (cpf) => {
              const client: Client = new Client(this.clientIdCounter++, name, email, phone, cpf);
              resolve(client);
            });
          });
        });
      });
    });
  }

  
  displayClientDetails(client: Client): void {
    console.log("====================")
    console.log(` ID: ${client.getId()}\n Nome: ${client.getName()}\n Telefone: ${client.getPhone()}`);
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
  
export default ClientView;
  