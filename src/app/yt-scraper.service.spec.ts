import { TestBed } from '@angular/core/testing';

import { YtScraperService } from './yt-scraper.service';

describe('YtScraperService', () => {
  let service: YtScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
