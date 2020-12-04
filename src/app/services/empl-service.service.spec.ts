import { TestBed } from '@angular/core/testing';

import { EmplServiceService } from './empl-service.service';

describe('EmplServiceService', () => {
  let service: EmplServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
