import MenuView from '../views/MenuView';
import ClientView from '../views/ClientView';
import Client from '../models/Client';

class ClientController {
  private clients: Client[] = []; // Array para armazenar clientes
  private clientView: ClientView;
  private menuView: MenuView;

  constructor(menuView: MenuView, clientView: ClientView) {
    this.menuView = menuView;
    this.clientView = clientView;
  }

  async manageClients(): Promise<void> {
    let choice: number;

    do {
      choice = await this.menuView.displayManageClientsMenu(); // Exibe o menu de gerenciamento de clientes

      switch (choice) {
        case 1:
          // Opção para adicionar cliente
          await this.addClient();
          break;
        case 2:
          // Opção para listar clientes
          await this.listClients();
          break;
        case 3:
          console.log("Voltando para o Menu Principal...");
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    } while (choice !== 3); // Continua até o usuário escolher "Voltar para o Menu Principal"
  }

  private async addClient(): Promise<void> {
    const newClient = await this.clientView.askForClientDetails(); // Solicita detalhes do novo cliente
    this.clients.push(newClient); // Adiciona o cliente ao array de clientes

    console.log(` ID: ${newClient.getId()}\n Nome: ${newClient.getName()}\n CPF: ${newClient.getCpf()}`);


    await this.clientView.askToContinue("Pressione Enter para continuar...");
  }
  

  private async listClients(): Promise<void> {
    if (this.clients.length === 0) {
      console.log("Não existem clientes cadastrados.");
    } else {
      console.log("Lista de Clientes:");
      this.clients.forEach((client) => {
        this.clientView.displayClientDetails(client); // Exibe detalhes de todos os clientes
      });
    }

    await this.clientView.askToContinue("Pressione Enter para retornar ao menu de clientes...");
  }
}

export default ClientController;
