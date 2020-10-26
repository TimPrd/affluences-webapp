import { TestBed } from '@angular/core/testing';

import { AffluencesService } from './affluences.service';

describe('AffluencesService', () => {
  let service: AffluencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffluencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
