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
    // provide 18 integers between 0 and 255 to imitate quantum response
    const seedNumbers = [];
    for (let i = 0; i < 18; i++) {
      seedNumbers.push(Math.floor(Math.random() * 256));
    }
    return this.http.post<any>(`${environment.apiUrl}/api/new-reading`, seedNumbers);

  }
}
