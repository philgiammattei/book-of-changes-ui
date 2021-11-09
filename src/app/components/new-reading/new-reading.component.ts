import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadingService } from 'src/app/services/reading.service';

@Component({
  selector: 'app-new-reading',
  templateUrl: './new-reading.component.html',
  styleUrls: ['./new-reading.component.scss']
})
export class NewReadingComponent {
  questionText = '';

  constructor(private router: Router, private route: ActivatedRoute, private readingService: ReadingService) { }

  goToReading(): void {
    this.readingService.setQuestion(this.questionText);
    this.router.navigate(['..', 'reading-result']);
  }
}
