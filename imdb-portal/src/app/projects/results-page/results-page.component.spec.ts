import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPageComponent } from './results-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MovieData} from '../../models/movie-data';

describe('ResultsPageComponent', () => {
  let component: ResultsPageComponent;
  let fixture: ComponentFixture<ResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPageComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should not have the pagination if the movies are not available'`, () => {
    fixture.detectChanges();
    component.movies = [];
    component.ngOnInit();

    expect(component.paginationAvailable).toBeFalsy();
  });

  it(`should not have the pagination if the number of movies are exactly as the max limit'`,
    () => {
    fixture.detectChanges();
    component.movies = [
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData()
    ];
    component.ngOnInit();

    expect(component.paginationAvailable).toBeFalsy();
  });

  it(`should not have the pagination if the number of movies are less than the max limit'`, () => {
    fixture.detectChanges();
    component.movies = [
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData()
    ];
    component.ngOnInit();

    expect(component.paginationAvailable).toBeFalsy();
  });

  it(`should have the pagination if there are too many movies to be shown in one page'`, () => {
    fixture.detectChanges();
    component.movies = [
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData()
    ];
    component.ngOnInit();
    expect(component.paginationAvailable).toBeTruthy();
  });

  it(`should be navigated to the next page when clicked right'`, () => {
    fixture.detectChanges();
    component.movies = [
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData()
    ];
    component.ngOnInit();
    component.goRight();
    expect(component.pageNumber).toEqual(2);
  });

  it(`should be navigated to the previous page when clicked left'`, () => {
    fixture.detectChanges();
    component.movies = [
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData(),
      new MovieData()
    ];
    component.ngOnInit();
    component.goRight();
    component.goLeft();
    expect(component.pageNumber).toEqual(1);
  });
});
