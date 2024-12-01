import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Response } from 'express';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async list(@Res() response: Response) {
    const result = await this.productService.get();
    return response.status(HttpStatus.GATEWAY_TIMEOUT).json(result);
  }
}