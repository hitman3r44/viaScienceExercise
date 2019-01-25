import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  baseurl = 'http://127.0.0.1:8000';
  HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) {}

  getAllVia(): Observable<any> {
          return this.http.get(this.baseurl + '/api/via/', {headers: this.HttpHeaders});
  }
  getVia(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/via/' + id + '/', {headers: this.HttpHeaders});
  }
  updateVia(via): Observable<any> {
    const body = {name: via.name};
    return this.http.put(this.baseurl + '/api/via/' + via.id + '/', body, {headers: this.HttpHeaders});
  }
  createVia(via): Observable<any> {
    const body = {name: via.name};
    return this.http.post(this.baseurl + '/api/via/', body, {headers: this.HttpHeaders});
  }
  deleteVia(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/via/' + id + '/', {headers: this.HttpHeaders});
  }
}
