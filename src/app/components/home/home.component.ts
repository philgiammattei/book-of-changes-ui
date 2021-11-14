import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  demoLines: any;

  constructor() { }

  ngOnInit(): void {
    this.demoLines = [
      this.randomBoolean(),
      this.randomBoolean(),
      this.randomBoolean(),
      this.randomBoolean(),
      this.randomBoolean(),
      this.randomBoolean(),
    ];
  }

  randomBoolean(): boolean {
    return Math.random() < 0.5 ? false : true;
  }

}
