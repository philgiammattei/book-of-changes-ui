import { TestBed } from '@angular/core/testing';

import { HexagramService } from './hexagram.service';

describe('HexagramService', () => {
  let service: HexagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
