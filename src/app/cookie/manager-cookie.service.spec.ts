import { TestBed, inject } from '@angular/core/testing';

import { ManagerCookieService } from './manager-cookie.service';

describe('ManagerCookieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerCookieService]
    });
  });

  it('should be created', inject([ManagerCookieService], (service: ManagerCookieService) => {
    expect(service).toBeTruthy();
  }));
});
