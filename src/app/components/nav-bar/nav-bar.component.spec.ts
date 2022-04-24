import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBArComponent } from './nav-bar.component';

describe('NavBArComponent', () => {
  let component: NavBArComponent;
  let fixture: ComponentFixture<NavBArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
