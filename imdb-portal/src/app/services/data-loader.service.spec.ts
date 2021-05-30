import { TestBed } from '@angular/core/testing';

import { DataLoaderService } from './data-loader.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('DataLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: DataLoaderService = TestBed.get(DataLoaderService);
    expect(service).toBeTruthy();
  });
});
