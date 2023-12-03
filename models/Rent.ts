import Car from '../models/Car';
import Client from '../models/Client';

class Rent {
  private id: number; // ID do aluguel
  private client: string; // ID do cliente relacionado ao aluguel (corrigido para string)
  private car: string; // ID do carro relacionado ao aluguel (corrigido para string)
  private startDate: Date; // Data de início do aluguel
  private endDate: Date; // Data de término do aluguel
  private price: number; // Preço do aluguel

  constructor(client: string, car: string, startDate: Date, endDate: Date, price: number) {
    this.id = Rent.nextId++; // Atribui um ID único para o aluguel e incrementa o contador de IDs
    this.client = client; // Define o ID do cliente relacionado
    this.car = car; // Define o ID do carro relacionado
    this.startDate = startDate; // Define a data de início
    this.endDate = endDate; // Define a data de término
    this.price = price; // Define o preço do aluguel
  }

  getId(): number {
    return this.id; // Retorna o ID do aluguel
  }

  getClientId(): string {
    return this.client; // Retorna o ID do cliente relacionado
  }

  setClientId(clientId: string): void {
    this.client = clientId; // Define o ID do cliente relacionado
  }

  getCarId(): string {
    return this.car; // Retorna o ID do carro relacionado
  }

  setCarId(carId: string): void {
    this.car = carId; // Define o ID do carro relacionado
  }

  getStartDate(): Date {
    return this.startDate; // Retorna a data de início
  }

  setStartDate(startDate: Date): void {
    this.startDate = startDate; // Define a data de início
  }

  getEndDate(): Date {
    return this.endDate; // Retorna a data de término
  }

  setEndDate(endDate: Date): void {
    this.endDate = endDate; // Define a data de término
  }

  getPrice(): number {
    return this.price; // Retorna o preço do aluguel
  }

  setPrice(price: number): void {
    this.price = price; // Define o preço do aluguel
  }

  static nextId = 1; // Inicializa o contador de IDs
}

export default Rent;
