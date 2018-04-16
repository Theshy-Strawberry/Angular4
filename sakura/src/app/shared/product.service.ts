import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) {}

  getProduct(): Product {
    return new Product(0,"lePro",2000,"贾跃亭");
  }
}
export   class Product {
  constructor(  public id: number,
                  public title: string,
                  public price: number,
                  public desc: string) {
  }
}
