import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reading } from 'src/app/model/reading';
import { ReadingService } from 'src/app/services/reading.service';

@Component({
  selector: 'app-reading-results',
  templateUrl: './reading-results.component.html',
  styleUrls: ['./reading-results.component.scss']
})
export class ReadingResultsComponent implements OnInit {

  reading$: Observable<Reading> = new Observable<Reading>();
  question = '';

  constructor(private readingService: ReadingService) { }

  ngOnInit(): void {
    this.question = this.readingService.getQuestion();
    this.reading$ = this.readingService.requestReading();
  }

}
