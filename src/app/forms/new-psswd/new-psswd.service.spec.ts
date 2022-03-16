import { TestBed, inject } from '@angular/core/testing';

import { NewPsswdService } from './new-psswd.service';

describe('NewPsswdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPsswdService]
    });
  });

  it('should be created', inject([NewPsswdService], (service: NewPsswdService) => {
    expect(service).toBeTruthy();
  }));
});
