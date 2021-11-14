import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hexagram } from '../model/hexagram';

@Injectable({
  providedIn: 'root'
})
export class HexagramService {

  constructor(private http: HttpClient) { }

  getAllHexagrams() {
    return this.http.get<any>(`${environment.apiUrl}/api/all-hexagrams`);
  }

  getHexagram(hexagramNumber: number) {
    return this.http.get<Hexagram>(`${environment.apiUrl}/api/get-hexagram-by-number?hexagramNumber=${hexagramNumber}`);
  }
}
