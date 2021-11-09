import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingResultsComponent } from './reading-results.component';

describe('ReadingResultsComponent', () => {
  let component: ReadingResultsComponent;
  let fixture: ComponentFixture<ReadingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
