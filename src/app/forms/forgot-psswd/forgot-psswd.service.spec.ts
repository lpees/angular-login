import { TestBed, inject } from '@angular/core/testing';

import { ForgotPsswdService } from './forgot-psswd.service';

describe('ForgotPsswdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotPsswdService]
    });
  });

  it('should be created', inject([ForgotPsswdService], (service: ForgotPsswdService) => {
    expect(service).toBeTruthy();
  }));
});
