import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {

  constructor(
    private http: HttpClient
  ) { }

  add(formData:any): Observable<any> {
    return this.http.post<any>('http://localhost:4444/consignment/save-consignment',formData);
  }
  update(data:any): Observable<any> {
    return this.http.post<any>('http://localhost:4444/consignment/update-consignment',data);
  }
  getList():Observable<any> {
    return this.http.get<any>('http://localhost:4444/consignment/get-all-consignment');
  }
  getNewList():Observable<any> {
    return this.http.get<any>('http://localhost:4444/consignment/get-all-new-consignment');
  }
  getOne(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/consignment/get-consignment?id='+id);
  }
  createReceipt(data:any): Observable<any> {
    return this.http.post<any>('http://localhost:4444/receipt/create-receipt/',data);
  }
  getConsignmentDetails(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/consignment/get-consignment-details?id='+id);

  }
}
