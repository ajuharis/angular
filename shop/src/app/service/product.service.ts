import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _context: string = 'http://localhost:8082/product';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  

  constructor(private http: HttpClient) { }

  getProducts(): Observable <IProduct[]>{
    return this.http.get<IProduct[]>(this._context+'/get');
  }

  getProduct(productId: number): Observable <IProduct>{
    return this.http.get<IProduct>(this._context+'/get/'+productId);
  }

  getProductsByCategory(categoryId: number): Observable <IProduct[]>{
    return this.http.get<IProduct[]>(this._context+'/getByC/'+categoryId);
  }

  addProduct(product: IProduct): Observable <any>{
    product.status = 1;
    product.description = 'Descru';
    return this.http.post(this._context+'/post', product, this.httpOptions);
  }
}
