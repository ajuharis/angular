import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { FormsModule } from '@angular/forms';
import { ICategory } from 'src/app/model/category';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public categories = [];
  public category: ICategory;
  public product: IProduct;

  loading = false;
  valid = false;
  success = false;

  constructor(private _categoryService: CategoryService, private _productService: ProductService) { }

  ngOnInit() {
    this.init();
    this._categoryService.getCategory()
    .subscribe(data => {
      this.categories = data;
    });
  }

  submitCategory(){
    if(this.category.name == null || this.category.name == '' || this.category.description == null || this.category.description == ''){
      this.valid = true;
    } else{
      this._categoryService.addCategory(this.category)
      .subscribe(
        data => {
          this.success = true;
          this.init();
          this._categoryService.getCategory()
          .subscribe(data => {
            this.categories = data;
          });
        },
        error => console.log(error)
      );
    }
  }
  submitProduct(){
    if(this.product.name == null || this.product.name == '' || this.product.categoryId == null || this.product.categoryId == 0){
      this.valid = true;
    } else{
      this.success = true;
      this._productService.addProduct(this.product)
      .subscribe(
        data => {
          console.log(data);
          this.init();
        },
        error => console.log(error)
      );
    }
  }
  clearCategory(){
    this.valid = false;
    this.success = false;
    this.category.name = '';
    this.category.description = '';
    this.product.name = '';
    this.product.categoryId = 0;
  }
  init(){
    this.category = {
      id: null,
      name: '',
      description: '',
      status: null,
      createdAt: null,
      updatedAt: null
    };
    this.product = {
      id: null,
      categoryId: null,
      name: '',
      description: '',
      status: null,
      createdAt: null,
      updatedAt: null
    };
  }

}
