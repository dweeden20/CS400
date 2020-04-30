import { TestBed } from '@angular/core/testing';

import { GetBreedImageService } from './get-breed-image.service';

describe('GetBreedImageService', () => {
  let service: GetBreedImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBreedImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
