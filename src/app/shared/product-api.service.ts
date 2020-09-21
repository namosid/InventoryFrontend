import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IProduct, IUsesr } from '../inventory-edit/inventory-edit.component';
import { AlertifyService } from '../shared/alertify.service';
import * as alertify from 'alertifyjs'

@Injectable({
  providedIn: 'root'
})

export class ProductApiService {
  

  constructor(private http: HttpClient,
    private alertify: AlertifyService) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // Define API
  apiURL = 'https://localhost:44347/api';

  
  getUser(loginId,password) : Observable<IUsesr>{
    return this.http.get<IUsesr>(this.apiURL + '/User?' +'loginId='+ loginId+'&'+'password='+password)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  // HttpClient API get() method => Fetch Products list
  getProducts(): Observable<IProduct> {
    return this.http.get<IProduct>(this.apiURL + '/Inventory')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch Product
  getProduct(id): Observable<IProduct> {
    return this.http.get<IProduct>(this.apiURL + '/Inventory/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create Product
  createProduct(product): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiURL + '/Inventory', JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update Product
  updateProduct(id, product): Observable<IProduct> {
    return this.http.put<IProduct>(this.apiURL + '/Inventory/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error) {
       // Get client-side error
       errorMessage = error.error;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
    //window.alert(errorMessage);
     alertify.error(errorMessage);
     return throwError(errorMessage);
  }

}
