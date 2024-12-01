import { Injectable } from '@nestjs/common';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

@Injectable()
export class ProductService {
  async get() {
    const randomSeconds = Math.floor(Math.random() * 5);
    if (randomSeconds % 2 === 0) {
      await sleep(randomSeconds * 1000);
      return;
    }
    return [
      { name: 'Produto 1', description: 'Produto 1 descrição' },
      { name: 'Produto 2', description: 'Produto 2 descrição' },
      { name: 'Produto 3', description: 'Produto 3 descrição' },
      { name: 'Produto 4', description: 'Produto 4 descrição' },
    ];
  }
}
