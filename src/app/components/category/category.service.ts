import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
//injection
  constructor(
    private http: HttpClient
  ) { }
  
  getList():Observable<any> {
    return this.http.get<any>('http://localhost:4444/category/get-all-category');
  }
  add(data: any):Observable<any> {
    return this.http.post<any>('http://localhost:4444/category/save-category/',data);
  }
  getOne(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/category/get-category?id='+id);
  }
  validateName(name: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/category/validate-name?name='+name);
  }
  validateCode(code: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/category/validate-code?code='+code);
  }
}
