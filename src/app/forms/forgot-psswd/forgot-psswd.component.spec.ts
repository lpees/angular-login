import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPsswdComponent } from './forgot-psswd.component';

describe('ForgotPsswdComponent', () => {
  let component: ForgotPsswdComponent;
  let fixture: ComponentFixture<ForgotPsswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPsswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPsswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
