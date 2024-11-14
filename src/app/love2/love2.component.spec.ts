import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Love2Component } from './love2.component';

describe('Love2Component', () => {
  let component: Love2Component;
  let fixture: ComponentFixture<Love2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Love2Component]
    });
    fixture = TestBed.createComponent(Love2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
