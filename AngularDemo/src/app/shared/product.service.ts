import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 99, 3, '这是第一个商品描述', ['Q', 'W']),
    new Product(2, '第二个商品', 99, 4, '这是第一个商品描述', ['Q', 'W']),
    new Product(3, '第三个商品', 99, 4.5, '这是第一个商品描述', ['Q', 'W']),
    new Product(4, '第四个商品', 99, 5, '这是第一个商品描述', ['Q', 'W']),
    new Product(5, '第五个商品', 99, 1, '这是第一个商品描述', ['Q', 'W']),
    new Product(6, '第六个商品', 99, 2, '这是第一个商品描述', ['Q', 'W'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '20170101', 'lmin', 3, 'aiyou,bucuoo'),
    new Comment(2, 1, '20170103', 'zxiu', 4, 'lajhi,doubiemai'),
    new Comment(3, 2, '20190103', 'uzi', 5, 'rngrayli')
  ];

  constructor() {
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(public  id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

export class Comment {
  constructor(public  id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}
