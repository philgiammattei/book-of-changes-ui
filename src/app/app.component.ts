import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReversePipe } from 'ngx-pipes';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Line } from './model/line';
import { Reading } from './model/reading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  reading$: Observable<Reading> = new Observable<Reading>();

  constructor(private http: HttpClient) { }

  requestReading() {
    this.reading$ = this.http.get<any>('http://localhost:8080/api/new-reading');
  }

  renderLine(line: Line) {
    console.log(line);

    if (line.yang && line.changeLine) {
      return '----o----';
    } else if (line.yang && !line.changeLine) {
      return '---------';
    } else if (!line.yang && !line.changeLine) {
      return '---   ---';
    } else if (!line.yang && line.changeLine) {
      return '--- x ---';
    } else {
      return 'invalid line';
    }
  }
}
