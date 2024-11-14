import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveAndOtherWordsComponent } from './love-and-other-words.component';

describe('LoveAndOtherWordsComponent', () => {
  let component: LoveAndOtherWordsComponent;
  let fixture: ComponentFixture<LoveAndOtherWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoveAndOtherWordsComponent]
    });
    fixture = TestBed.createComponent(LoveAndOtherWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
