import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

   private api = 'http://localhost:5000/api/persons';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
  }

  getPersons() {
    return this.http.get<any[]>(this.api, {
      headers: this.getHeaders()
    });
  }

}
