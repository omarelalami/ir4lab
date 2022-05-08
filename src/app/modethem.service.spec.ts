import { TestBed } from '@angular/core/testing';

import { ModethemService } from './modethem.service';

describe('ModethemService', () => {
  let service: ModethemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModethemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
