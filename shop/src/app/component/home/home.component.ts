import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories = [];
  public products = [];
  public categoryId: number = 0;
  public productId: number = 0;
  constructor(private _categoryService: CategoryService, private _productService: ProductService) { }

  ngOnInit() {
    
    this._categoryService.getCategory()
    .subscribe(data => {
      this.categories = data;
    });
    this._productService.getProducts()
    .subscribe( data => {
      this.products = data;
    });
  
  }
  onChangeCategory(){
    this._productService.getProductsByCategory(this.categoryId)
    .subscribe( data => {
      this.products = [];
      this.products = data;
    });
  }

  onChangeProduct(){
    this._productService.getProduct(this.productId)
    .subscribe( data => {
      console.log(data);
      this.products = [];
      this.products.push(data);
    });
  }

}
