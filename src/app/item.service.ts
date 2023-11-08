import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',})
  };

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addItem(newItem: any): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/new", newItem);
  }
}
