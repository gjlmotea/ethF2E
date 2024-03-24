import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  prompt$ = new BehaviorSubject<any>(null);

  url = 'http://127.0.0.1:3000/api/data';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.url, data, { withCredentials: false });
  }

}
