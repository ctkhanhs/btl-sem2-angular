import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //injection
  constructor(
    private http: HttpClient
  ) { }

  // getList(name: string = '', cat_id: any = ''): Observable<any> {

  //   if (name != '' && cat_id != '') {
  //     return this.http.get<any>('http://localhost:3000/product-search?name=' +name + '&cat_id=' +cat_id)
  //   }
  //   else if (name != '' && cat_id == '') {
  //     return this.http.get<any>('http://localhost:3000/product-search?name=' +name + '&cat_id=')
  //   }
  //   else if (name == '' && cat_id != '') {
  //     return this.http.get<any>('http://localhost:3000/product-search?cat_id=' +cat_id + '&name=')
  //   }
  //     return this.http.get<any>('http://localhost:3000/product');

  // }

  getList(name: string = '', cat_id: any = ''): Observable<any> {
    return this.http.get<any>('http://localhost:4444/product/get-all-product');

  }
  add(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4444/product/save-product/',data);
  }

  update(data: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/product/' + data.id, data);
  }

  upload(file: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/product-upload/', file);
  }
  getOne(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/product/get-product?id=' + id);
  }
}
