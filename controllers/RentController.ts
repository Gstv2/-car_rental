import MenuView from '../views/MenuView';
import RentView from '../views/RentView';
import Car from '../models/Car';
import Client from '../models/Client';
import Rent from '../models/Rent';

class RentController {
  private rents: Rent[] = []; // Array para armazenar aluguéis
  private rentView: RentView;
  private menuView: MenuView;

  constructor(menuView: MenuView, rentView: RentView) {
    this.menuView = menuView;
    this.rentView = rentView;
  }

  async manageRents(): Promise<void> {
    let choice: number;

    do {
      choice = await this.menuView.displayManageRentsMenu(); // Exibe o menu de gerenciamento de aluguéis

      switch (choice) {
        case 1:
          // Opção para adicionar aluguel
          await this.addRent();
          break;
        case 2:
          // Opção para listar aluguéis
          await this.listRents();
          break;
        case 3:
          console.log("Voltando para o Menu Principal...");
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
      }

    } while (choice !== 3); // Continua até o usuário escolher "Voltar para o Menu Principal"
  }

    // Função para calcular o custo total de um aluguel
    private calcularCustoAluguel(car: Car, startDate: Date, endDate: Date): number {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Calcula a diferença em dias
      return diffDays * car.getPricePerDay();
    }

  private async addRent(): Promise<void> {
    const newRent = await this.rentView.askForRentDetails(); // Solicita detalhes do novo aluguel
    this.rents.push(newRent); // Adiciona o aluguel ao array de aluguéis
    console.log("=========Aluguel adicionado:========")
    console.log(` ID: ${newRent.getId()}\n Cliente: ${newRent.clientId}\n Carro: ${newRent.carId}\n Data-inicio (AAAA-MM-DD): ${newRent.getStartDate()}\n Data-termino (AAAA-MM-DD): ${newRent.getEndDate()}`);
    console.log("====================================")
    await this.rentView.askToContinue("Pressione Enter para continuar...");
  }

  private async listRents(): Promise<void> {
    if (this.rents.length === 0) {
      console.log("Não existem aluguéis cadastrados.");
    } else {
      console.log("Lista de Aluguéis:");
      this.rents.forEach((rent) => {
        this.rentView.displayRentDetails(rent); // Exibe detalhes de todos os aluguéis
      });
    }

    await this.rentView.askToContinue("Pressione Enter para retornar ao menu de aluguéis...");
  }
}

export default RentController;
