import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreaderComponent } from './threader.component';

describe('ThreaderComponent', () => {
  let component: ThreaderComponent;
  let fixture: ComponentFixture<ThreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
