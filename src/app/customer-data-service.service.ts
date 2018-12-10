import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataServiceService {

  constructor(private http: HttpClient) {
    console.log('Customer Data Service Initialized...');
  }

  getUsers() {
    console.log('getUsers');
    return this.http.get('http://localhost:3000/api/users');
  }

  getUserDetails(userId) {
    return this.http.get('http://localhost:3000/api/users/' + userId);
  }
}
