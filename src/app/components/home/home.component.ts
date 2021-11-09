import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  demoHex: any;

  constructor() { }

  ngOnInit(): void {
    this.demoHex = [
      { isYang: this.randomBoolean(), isChangeLine: this.randomBoolean() },
      { isYang: this.randomBoolean(), isChangeLine: this.randomBoolean() },
      { isYang: this.randomBoolean(), isChangeLine: this.randomBoolean() },
      { isYang: this.randomBoolean(), isChangeLine: this.randomBoolean() },
      { isYang: this.randomBoolean(), isChangeLine: this.randomBoolean() },
      { isYang: this.randomBoolean(), isChangeLine: this.randomBoolean() },
    ];
  }

  randomBoolean(): boolean {
    return Math.random() < 0.5 ? false : true;
  }

}
