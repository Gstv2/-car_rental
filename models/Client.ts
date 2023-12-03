class Client {
    private id: number; // ID do cliente
    private name: string; // Nome do cliente
    private email: string; // Email do cliente
    private phone: string; // Número de telefone do cliente
    private cpf: string; // CPF do cliente
  
    constructor(id: number, name: string, email: string, phone: string, cpf: string) {
      this.id = id; // Inicializa o ID do cliente
      this.name = name; // Inicializa o nome do cliente
      this.email = email; // Inicializa o email do cliente
      this.phone = phone; // Inicializa o número de telefone do cliente
      this.cpf = cpf; // Inicializa o CPF do cliente
    }
  
    getId(): number {
      return this.id; // Retorna o ID do cliente
    }
  
    getName(): string {
      return this.name; // Retorna o nome do cliente
    }
  
    setName(name: string): void {
      this.name = name; // Define o nome do cliente
    }
  
    getEmail(): string {
      return this.email; // Retorna o email do cliente
    }
  
    setEmail(email: string): void {
      this.email = email; // Define o email do cliente
    }
  
    getPhone(): string {
      return this.phone; // Retorna o número de telefone do cliente
    }
  
    setPhone(phone: string): void {
      this.phone = phone; // Define o número de telefone do cliente
    }
  
    getCpf(): string {
      return this.cpf; // Retorna o CPF do cliente
    }
  
    setCpf(cpf: string): void {
      this.cpf = cpf; // Define o CPF do cliente
    }
  }
  
  export default Client;
  