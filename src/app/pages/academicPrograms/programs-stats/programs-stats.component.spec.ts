import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsStatsComponent } from './programs-stats.component';

describe('ProgramsStatsComponent', () => {
  let component: ProgramsStatsComponent;
  let fixture: ComponentFixture<ProgramsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
