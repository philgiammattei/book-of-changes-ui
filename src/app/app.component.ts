import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReversePipe } from 'ngx-pipes';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Line } from './model/line';
import { Reading } from './model/reading';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  reading$: Observable<Reading> = new Observable<Reading>();

  constructor(private http: HttpClient) { }

  requestReading() {
    this.reading$ = this.http.get<any>(`${environment.apiUrl}/api/new-reading`);
  }
}
