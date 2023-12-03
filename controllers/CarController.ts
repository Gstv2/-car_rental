import MenuView from '../views/MenuView';
import CarView from '../views/CarView';
import Car from '../models/Car';

class CarController {
    private cars: Car[] = []; // Array para armazenar carros
    private carView: CarView;
    private menuView: MenuView;

    constructor(menuView: MenuView, carView: CarView) {
        this.menuView = menuView;
        this.carView = carView;
    }

    async manageCars(): Promise<void> {
        let choice: number;

        do {
            choice = await this.menuView.displayManageCarsMenu(); // Exibe o menu de gerenciamento de carros

            switch (choice) {
                case 1:
                    // Opção para adicionar carro
                    await this.addCar();
                    break;
                case 2:
                    // Opção para listar carros
                    await this.listCars();
                    break;
                case 3:
                    console.log("Voltando para o Menu Principal...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (choice !== 3); // Continua até o usuário escolher "Voltar para o Menu Principal"
    }

    private async addCar(): Promise<void> {
      const newCar = await this.carView.askForCarDetails(); // Solicita detalhes do novo carro
      this.cars.push(newCar); // Adiciona o carro ao array de carros
      console.log("=========Carro adicionado:===========")
      console.log(` ID: ${newCar.getId()}\n Marca: ${newCar.getBrand()}\n Modelo: ${newCar.getModel()}\n Placa: ${newCar.getPlate()}\n Preço-por-dia: ${newCar.getPricePerDay()}`);
      console.log("=====================================")

      await this.carView.askToContinue("Pressione Enter para continuar...");
    }

    private async listCars(): Promise<void> {
      if (this.cars.length === 0) {
          console.log("Não existem carros cadastrados.");
      } else {
          console.log("Lista de Carros:");
          this.cars.forEach((car) => {
              this.carView.displayCarDetails(car); // Exibe detalhes de todos os carros
          });
      }

      await this.carView.askToContinue("Pressione Enter para retornar ao menu de carros...");
    }
}

export default CarController;
