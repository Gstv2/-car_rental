// Importação das views e controladores
import MenuView from './views/MenuView';
import CarView from './views/CarView';
import CarController from './controllers/CarController';
import ClientView from './views/ClientView';
import ClientController from './controllers/ClientController';
import RentView from './views/RentView';
import RentController from './controllers/RentController';

// Função principal assíncrona
async function main() {
  // Inicialização das instâncias de views e controladores
  const menuView = new MenuView();
  const carView = new CarView();
  const carController = new CarController(menuView, carView);
  const clientView = new ClientView();
  const clientController = new ClientController(menuView, clientView);
  const rentView = new RentView();
  const rentController = new RentController(menuView, rentView);

  let choice: number;

  // Loop principal que exibe o menu e permite a interação com o usuário
  do {
    choice = await menuView.displayMainMenu();

    switch (choice) {
      case 1:
        await carController.manageCars();
        break;
      case 2:
        await clientController.manageClients();
        break;
      case 3:
        await rentController.manageRents();
        break;
      case 0:
        console.log('Saindo...'); // Exibe mensagem de saída
        break;
      default:
        console.log('Opção inválida'); // Exibe mensagem de opção inválida
    }

  } while (choice !== 0);

  console.log("Até logo!"); // Exibe mensagem de despedida
}

main(); // Chama a função principal para iniciar a aplicação
