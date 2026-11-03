import { TestBed } from '@angular/core/testing';
import { EditGuard } from './editGuard';

describe('EditGuard', () => {
  let service: EditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
