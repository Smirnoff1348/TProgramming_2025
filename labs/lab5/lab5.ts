export class Computer {
  brand: string;
  model: string;
  hdSize: number;

  constructor(brand: string, model: string, hdSize: number) {
    this.brand = brand;
    this.model = model;
    this.hdSize = hdSize;
  }

  setSize(size: number): void {
    this.hdSize = size;
  }

  getSize(): number {
    return this.hdSize;
  }

  print(): void {
    console.log(`${this.brand} ${this.model} ${this.hdSize} GB`);
  }
}

// Пример использования (для самопроверки)
const pc = new Computer("Kraftway", "IC220", 512);
pc.print();
pc.setSize(1024);
pc.print();