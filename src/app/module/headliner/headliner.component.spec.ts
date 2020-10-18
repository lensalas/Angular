import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinerComponent } from './headliner.component';

describe('HeadlinerComponent', () => {
  let component: HeadlinerComponent;
  let fixture: ComponentFixture<HeadlinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
