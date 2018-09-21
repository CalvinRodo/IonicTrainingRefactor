import { TestBed, inject } from '@angular/core/testing';

import { IconMapService } from './icon-map.service';

describe('IconMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconMapService]
    });
  });

  it('should be created', inject([IconMapService], (service: IconMapService) => {
    expect(service).toBeTruthy();
  }));
});
