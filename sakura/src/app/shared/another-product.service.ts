import {Injectable} from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  getProduct(): Product {
    return new Product(2, 'leMax', 16696, '旗舰机');
  }

  constructor(public  logger: LoggerService) {
  }

}
