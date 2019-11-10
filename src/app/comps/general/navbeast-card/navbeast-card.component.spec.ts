import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbeastCardComponent } from './navbeast-card.component';

describe('NavbeastCardComponent', () => {
  let component: NavbeastCardComponent;
  let fixture: ComponentFixture<NavbeastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbeastCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbeastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
