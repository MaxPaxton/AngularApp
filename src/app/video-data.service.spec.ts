import { TestBed, inject } from '@angular/core/testing';

import { VideoDataService } from './video-data.service';

describe('VideoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoDataService]
    });
  });

  it('should be created', inject([VideoDataService], (service: VideoDataService) => {
    expect(service).toBeTruthy();
  }));
});
