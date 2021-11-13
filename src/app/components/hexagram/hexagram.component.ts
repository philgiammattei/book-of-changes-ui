import { Component, Input, OnInit } from '@angular/core';
import { Line } from 'src/app/model/line';

@Component({
  selector: 'app-hexagram',
  templateUrl: './hexagram.component.html',
  styleUrls: ['./hexagram.component.scss']
})
export class HexagramComponent implements OnInit {

  @Input() lines: Line[] = [];
  @Input() yangs: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
