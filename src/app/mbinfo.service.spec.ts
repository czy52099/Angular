import { TestBed } from '@angular/core/testing';

import { MbinfoService } from './mbinfo.service';

describe('MbinfoService', () => {
  let service: MbinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
