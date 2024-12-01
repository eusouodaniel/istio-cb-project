import { Injectable } from '@nestjs/common';
import { request } from 'undici';

@Injectable()
export class ProductService {
  async get() {
    try {
      const { statusCode, body } = await request(
        'http://app-b-svc.b.svc.cluster.local/products',
      );
      console.log(statusCode);
      return await body.json();
    } catch (error) {
      console.error('Error...', { error });
      return;
    }
  }
}
