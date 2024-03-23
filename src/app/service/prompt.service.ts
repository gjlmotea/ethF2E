import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  url = 'https://dummyjson.com/products/1';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.url, data, { withCredentials: true });
  }
}
