import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private id: number;
  private name: string;


  private productId: number;
  private productName: string;
// 1路由时传递数据
//   constructor(private r: ActivatedRoute) {
//   }
//   ngOnInit() {
//     this.id = this.r.snapshot.queryParams['id'];
//     this.name = this.r.snapshot.queryParams['name'];
//   }
  constructor(private r: ActivatedRoute) {
  }

  ngOnInit() {
    // this.id = this.r.snapshot.queryParams['id'];
    // this.name = this.r.snapshot.queryParams['name'];
    this.r.data.subscribe((data: { product: Product }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
    // 参数订阅
    // this.r.params.subscribe((params: Params) => this.id = params['id']);
    // this.id = this.r.snapshot.params['id'];
  }
}

export class Product {
  constructor(public id: number, public name: string) {
  }
}
