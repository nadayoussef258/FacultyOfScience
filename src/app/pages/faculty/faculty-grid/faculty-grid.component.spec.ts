import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGridComponent } from './faculty-grid.component';

describe('FacultyGridComponent', () => {
  let component: FacultyGridComponent;
  let fixture: ComponentFixture<FacultyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
