import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousheadComponent } from './soushead.component';

describe('SousheadComponent', () => {
  let component: SousheadComponent;
  let fixture: ComponentFixture<SousheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousheadComponent]
    });
    fixture = TestBed.createComponent(SousheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
