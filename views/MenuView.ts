import * as readline from 'readline';

class MenuView {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    displayMainMenu(): Promise<number> {
        return new Promise((resolve) => {
            console.clear(); // Limpa a tela
            console.log("===== Menu Principal =====");
            console.log("1. Gerenciar Carros");
            console.log("2. Gerenciar Clientes");
            console.log("3. Gerenciar Aluguéis");
            console.log("0. Sair");
            console.log("==========================")

            this.rl.question("Selecione uma opção: ", (choice) => {
                resolve(parseInt(choice));
            });
        });
    }

    closeMenu(): void {
        this.rl.close();
    }

    displayManageCarsMenu(): Promise<number> {
        return new Promise((resolve) => {
            console.clear(); // Limpa a tela
            console.log("===== Menu de Gerenciamento de Carros =====");
            console.log("1. Adicionar Carro");
            console.log("2. Listar Carros");
            console.log("3. Voltar para o Menu Principal");
            console.log("============================================")


            this.rl.question("Selecione uma opção: ", (choice) => {
                resolve(parseInt(choice));
            });
        });
    }
  
    displayManageClientsMenu(): Promise<number> {
        return new Promise((resolve) => {
            console.clear(); // Limpa a tela
            console.log("===== Menu de Gerenciamento de Clientes =====");
            console.log("1. Adicionar Clientes");
            console.log("2. Listar Clientes");
            console.log("3. Voltar para o Menu Principal");
            console.log("==============================================")

            this.rl.question("Selecione uma opção: ", (choice) => {
                resolve(parseInt(choice));
            });
        });
    }
    
    displayManageRentsMenu(): Promise<number> {
        return new Promise((resolve) => {
            console.clear(); // Limpa a tela
            console.log("===== Menu de Gerenciamento de Aluguéis =====");
            console.log("1. Adicionar Aluguéis");
            console.log("2. Listar Aluguéis");
            console.log("3. Voltar para o Menu Principal");
            console.log("==============================================")

            this.rl.question("Selecione uma opção: ", (choice) => {
              resolve(parseInt(choice));
            });
        });
    }
    // Adicione métodos semelhantes para gerenciar clientes e aluguéis conforme necessário
}

export default MenuView;
