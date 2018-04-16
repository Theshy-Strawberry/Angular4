import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import {getQueryValue} from '@angular/core/src/view/query';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private url: string;

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor(private  productService: ProductService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(
      value => this.keyword = value
  );
  }

  ngOnInit() {
    this.url = 'http://img.zcool.cn/community/01b52855dc4b6932f875a13252f0e4.jpg@1280w_1l_2o_100sh.jpg';

    this.products = this.productService.getProducts();
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
