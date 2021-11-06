import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {

  @Input() isYang: boolean = false;
  @Input() isChangeLine: boolean = false;

}
