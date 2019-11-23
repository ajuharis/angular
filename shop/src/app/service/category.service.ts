import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ICategory } from '../model/category';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  private _context: string = 'http://localhost:8081/category';
  constructor(private http: HttpClient) { }

  getCategory(): Observable <ICategory[]>{
    return this.http.get<ICategory[]>(this._context+'/get');
  }
  addCategory(category: ICategory): Observable<any>{
    category.status = 1;
    return this.http.post<any>(this._context+'/post', category, this.httpOptions);
  }
  
}
