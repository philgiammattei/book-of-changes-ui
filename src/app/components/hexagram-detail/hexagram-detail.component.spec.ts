import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagramDetailComponent } from './hexagram-detail.component';

describe('HexagramDetailComponent', () => {
  let component: HexagramDetailComponent;
  let fixture: ComponentFixture<HexagramDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexagramDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagramDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
