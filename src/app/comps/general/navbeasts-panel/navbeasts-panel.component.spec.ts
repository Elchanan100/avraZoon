import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbeastsPanelComponent } from './navbeasts-panel.component';

describe('NavbeastsPanelComponent', () => {
  let component: NavbeastsPanelComponent;
  let fixture: ComponentFixture<NavbeastsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbeastsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbeastsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
