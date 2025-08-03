import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyIntroComponent } from './faculty-intro.component';

describe('FacultyIntroComponent', () => {
  let component: FacultyIntroComponent;
  let fixture: ComponentFixture<FacultyIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
