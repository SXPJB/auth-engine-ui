import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a findAllGenders method that returns an observable', () => {
    expect(service.findAllGenders()).toBeTruthy();
  });

  it('should have a registerUser method that returns an observable', () => {
    expect(
      service.registerUser({
        firstName: 'John',
        lastName: 'Doe',
        email: 'jon@mail.com',
        gender: 'M',
        username: 'johndoe',
        password: 'password',
      }),
    ).toBeTruthy();
  });
});
