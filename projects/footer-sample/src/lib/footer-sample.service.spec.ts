import { TestBed } from '@angular/core/testing';

import { FooterSampleService } from './footer-sample.service';

describe('FooterSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooterSampleService = TestBed.get(FooterSampleService);
    expect(service).toBeTruthy();
  });
});
