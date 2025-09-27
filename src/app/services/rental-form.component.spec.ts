import { TestBed } from '@angular/core/testing';

import { RentalFormComponent } from './rental-form.component';

describe('RentalFormComponent', () => {
  let service: RentalFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalFormComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
