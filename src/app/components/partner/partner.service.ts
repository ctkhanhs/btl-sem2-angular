import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(
    private http: HttpClient

  ) { }

  getList():Observable<any> {
    return this.http.get<any>('http://localhost:4444/partner/get-all-partner');
  }
  add(data: any):Observable<any> {
    return this.http.post<any>('http://localhost:4444/partner/save-partner/',data);
  }

  getOne(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:4444/partner/get-partner?id='+id);
  }
}
