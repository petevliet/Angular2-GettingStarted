import {Component, OnInit} from 'angular2/core';
import {IProduct} from './product';
import {StarComponent} from '../shared/star.component'
import {ProductFilterPipe}  from './product-filter.pipe';
import {ProductService} from './product.service'

@Component({
  selector: 'pm-products',
  templateUrl: 'app/products/product-list.component.html',
  pipes: [ProductFilterPipe],
  directives: [StarComponent]
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  products: IProduct[];

  constructor(private _productService: ProductService) {
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}