import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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
    return this.http.get<any>(`${environment.apiUrl}/api/new-reading`);
  }
}
