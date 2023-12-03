class Car {
    private static nextId: number = 1; // Variável estática para gerar IDs únicos
    private id: number; // ID único do carro
    private brand: string; // Marca do carro
    private model: string; // Modelo do carro
    private year: number; // Ano do carro
    private plate: string; // Placa do carro
    private pricePerDay: number; // Preço por dia de aluguel
    private available: boolean; // Indica se o carro está disponível
  
    constructor(brand: string, model: string, year: number, plate: string, pricePerDay: number, available: boolean) {
      this.id = Car.nextId++; // Atribui um ID único para o carro e incrementa o contador de IDs
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.plate = plate;
      this.pricePerDay = pricePerDay;
      this.available = available;
    }
  
    getId(): number {
      return this.id; // Retorna o ID do carro
    }
  
    getBrand(): string {
      return this.brand; // Retorna a marca do carro
    }
  
    setBrand(brand: string): void {
      this.brand = brand; // Define a marca do carro
    }
  
    getModel(): string {
      return this.model; // Retorna o modelo do carro
    }
  
    setModel(model: string): void {
      this.model = model; // Define o modelo do carro
    }
  
    getYear(): number {
      return this.year; // Retorna o ano do carro
    }
  
    setYear(year: number): void {
      this.year = year; // Define o ano do carro
    }
  
    getPlate(): string {
      return this.plate; // Retorna a placa do carro
    }
  
    setPlate(plate: string): void {
      this.plate = plate; // Define a placa do carro
    }
  
    getPricePerDay(): number {
      return this.pricePerDay; // Retorna o preço por dia de aluguel
    }
  
    setPricePerDay(price: number): void {
      this.pricePerDay = price; // Define o preço por dia de aluguel
    }
  
    isAvailable(): boolean {
      return this.available; // Retorna se o carro está disponível
    }
  
    setAvailable(available: boolean): void {
      this.available = available; // Define a disponibilidade do carro
    }
  }
  
  export default Car;
  