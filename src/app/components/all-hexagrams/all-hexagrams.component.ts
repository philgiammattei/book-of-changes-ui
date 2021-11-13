import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HexagramSummary } from 'src/app/model/hexagram-summary';
import { HexagramService } from 'src/app/services/hexagram.service';

@Component({
  selector: 'app-all-hexagrams',
  templateUrl: './all-hexagrams.component.html',
  styleUrls: ['./all-hexagrams.component.scss']
})
export class AllHexagramsComponent implements OnInit {

  hexagrams$: Observable<HexagramSummary[]> = new Observable<HexagramSummary[]>();

  constructor(private hexagramService: HexagramService) { }

  ngOnInit(): void {
    this.hexagrams$ = this.hexagramService.getAllHexagrams();
  }

}
