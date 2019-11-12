import { Injectable, InjectionToken, Inject } from "@angular/core";
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { map, catchError, delay } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSource {
  constructor(
    private http: HttpClient,
    @Inject(REST_URL) private url: string) {
  }

  getData(): Observable<Product[]> {
    // return this.http.get(this.url).pipe(map(response => response as Product[]));
    // return this.http.request<Product[]>(new HttpRequest('GET', this.url)).pipe(map(response => {
    //   return (response as HttpResponse<Product[]>).body
    // }));
    return this.http.jsonp(this.url, "callback").pipe(
      map(response => response as Product[]),
      catchError(err => {
        return Promise.reject(`Network Error: ${err.statusText} (${err.status})`)
      })).pipe(delay(5000));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post(this.url, product).pipe(map(response => response as Product));
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(`${this.url}/${product.id}`, product).pipe(map(response => response as Product));
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(`${this.url}/${id}`).pipe(map(response => response as Product));
  }

  
}