import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Product } from 'src/app/component/product/product.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3001/products/";

  constructor(private snackBar: MatSnackBar,
  private httpClient: HttpClient) { }

  showMessage(message: string, isError: boolean = false): void {
    // 2o argumento é o botão que irá fechar o alerta
    // 3o argumento são as configurações: alerta irá durar 3000ms, exibido na direita e no topo
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product> {
    // método post recebe 1o parâmetro a URL e o 2o parâmetro o produto a ser criado
    // como é uma requisição do HttpClient, irá retornar um Observable.
    // se a requisição for sucesso 200, irá retornar um product (de acordo com o modelo criado)
    return this.httpClient.post<Product>(this.baseUrl, product)
      .pipe(
        map(response => response),
        catchError(error => this.handleError(error))
      );
  }

  read(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl)
    .pipe(
      map(response => response),
      catchError(error => this.handleError(error))
    );
  }

  // método get/put recebe a url como parâmetro (url/id), retornando o próprio produto
  
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Product>(url)
    .pipe(
      map(response => response),
      catchError(error => this.handleError(error))
    );
  }

  put(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.httpClient.put<Product>(url, product)
    .pipe(
      map(response => response),
      catchError(error => this.handleError(error))
    );   
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<Product>(url)
    .pipe(
      map(response => response),
      catchError(error => this.handleError(error))
    );
  }

  handleError(error: any): Observable<any> {
    console.log(error);
    this.showMessage("Ocorreu um erro", true);
    return EMPTY;
  } 
}
