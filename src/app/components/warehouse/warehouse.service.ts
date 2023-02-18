import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private http: HttpClient
  ) { }

  getList():Observable<any> {
    return this.http.get<any>('http://localhost:4444/warehouse/get-all-warehouse');
  }
  add(data: any):Observable<any> {
    return this.http.post<any>('http://localhost:4444/warehouse/save-warehouse/',data);
  }

  getOne(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/warehouse/get-warehouse?id='+id);
  }
  getListByType(type:any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/warehouse/get-all-warehouse-by-type?type='+type);
  }
  getReceipt(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/warehouse/get-all-consignment-in-warehouse?id='+id);
  }
  
}
