import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

class QuantumResponse {
  data: number[] = [];
}

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  question: string = '';

  constructor(private http: HttpClient) { }

  setQuestion(question: string): void {
    this.question = question;
  }

  getQuestion(): string {
    return this.question;
  }

  requestReading() {
    return this.http.get<QuantumResponse>(environment.quantumUrl).pipe(
      switchMap((response) => this.http.post<any>(`${environment.apiUrl}/api/new-reading`, response.data)));

  }
}
