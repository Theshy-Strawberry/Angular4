import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  newRating: number = 5;
  newComment: string = '';

  isCommentHidden: boolean = true;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    console.log('init');
    const productId: number = this.routeInfo.snapshot.params['productId'];
    console.log(productId);
    this.product = this.productService.getProduct(productId);
    console.log(this.product.desc);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  save() {
    let coment = new Comment(3, this.product.id, new Date().toISOString(), 'uzi', this.newRating, this.newComment);
    this.comments.unshift(coment);

    let sum = this.comments.reduce((sum, coment) => sum + coment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newRating = 5;
    this.newComment = null;
    this.isCommentHidden = true;
  }
}
