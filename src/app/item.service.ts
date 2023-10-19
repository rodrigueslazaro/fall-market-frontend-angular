import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items'; // Update with your server URL

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'origin': '*' })
  };

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addItem(newItem: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newItem).pipe();
  }
}
