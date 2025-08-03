import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgramsPageComponent } from './academic-programs-page.component';

describe('AcademicProgramsPageComponent', () => {
  let component: AcademicProgramsPageComponent;
  let fixture: ComponentFixture<AcademicProgramsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicProgramsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicProgramsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
