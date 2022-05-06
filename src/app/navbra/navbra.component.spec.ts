import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbraComponent } from './navbra.component';

describe('NavbraComponent', () => {
  let component: NavbraComponent;
  let fixture: ComponentFixture<NavbraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
