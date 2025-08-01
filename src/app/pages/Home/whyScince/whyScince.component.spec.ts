/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyScinceComponent } from './whyScince.component';

describe('WhyScinceComponent', () => {
  let component: WhyScinceComponent;
  let fixture: ComponentFixture<WhyScinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyScinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyScinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
