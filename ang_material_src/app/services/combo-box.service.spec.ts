import { TestBed, inject } from '@angular/core/testing';

import { ComboBoxService } from './combo-box.service';

describe('ComboBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComboBoxService]
    });
  });

  it('should be created', inject([ComboBoxService], (service: ComboBoxService) => {
    expect(service).toBeTruthy();
  }));
});
