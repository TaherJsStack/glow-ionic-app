import { TestBed } from '@angular/core/testing';

import { ContentModalService } from './content-modal.service';

describe('CongratsModalService', () => {
  let service: ContentModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
