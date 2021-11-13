import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HexagramService {

  constructor(private http: HttpClient) { }

  getAllHexagrams() {
    return this.http.get<any>(`${environment.apiUrl}/api/all-hexagrams`);
  }
}
