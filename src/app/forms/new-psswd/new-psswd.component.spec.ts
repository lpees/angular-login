import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPsswdComponent } from './new-psswd.component';

describe('NewPsswdComponent', () => {
  let component: NewPsswdComponent;
  let fixture: ComponentFixture<NewPsswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPsswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPsswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
