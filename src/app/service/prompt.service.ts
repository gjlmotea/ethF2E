import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  prompt$ = new BehaviorSubject<any>(null);

  url = 'http://127.0.0.1:3000/api/data';

  constructor(private http: HttpClient) {}

  getSomeData2() {
    this.http.get(this.url).subscribe(
      (res) => {
        console.log(res);
        this.prompt$.next(res);
      }
    );
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.url, data, { withCredentials: false });
  }

}
