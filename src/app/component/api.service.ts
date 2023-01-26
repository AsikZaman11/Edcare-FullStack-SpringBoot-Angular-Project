import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:8080/az-eshop.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCourseModule(){
    return this.http.get<any>("http://localhost:8080/allmodule/couse")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
