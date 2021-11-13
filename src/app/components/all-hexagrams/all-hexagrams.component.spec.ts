import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHexagramsComponent } from './all-hexagrams.component';

describe('AllHexagramsComponent', () => {
  let component: AllHexagramsComponent;
  let fixture: ComponentFixture<AllHexagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHexagramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHexagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
