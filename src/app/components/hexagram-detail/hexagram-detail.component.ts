import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hexagram } from 'src/app/model/hexagram';
import { HexagramService } from 'src/app/services/hexagram.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hexagram-detail',
  templateUrl: './hexagram-detail.component.html',
  styleUrls: ['./hexagram-detail.component.scss']
})
export class HexagramDetailComponent implements OnInit {

  hexagram$: Observable<Hexagram> = new Observable<Hexagram>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hexagramService: HexagramService
  ) { }

  ngOnInit(): void {
    this.hexagram$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.hexagramService.getHexagram(parseInt(params.get('number')!)))
    );
  }

  previousHexagram(hexagramNumber: number) {
    return `../${hexagramNumber === 1 ? 64 : hexagramNumber - 1}`;
  }

  nextHexagram(hexagramNumber: number) {
    return `../${hexagramNumber === 64 ? 1 : hexagramNumber + 1}`;
  }

}
