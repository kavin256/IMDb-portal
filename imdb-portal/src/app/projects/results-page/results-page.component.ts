import {Component, Input, OnInit} from '@angular/core';
import {MovieData} from '../../models/movie-data';
import {Constants} from '../../utils/Constants';

/**
 * Author: Kavin Ranawella
 * Date: 2021-05-28
 */

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  @Input() movies: MovieData [];

  // pagination related
  paginationAvailable: boolean;
  MAX_MOVIE_RESULTS_COUNT: number;
  selectedIndex: number = null;
  pagEnd: number;
  pagStart: number;
  pageNumber: number;
  rightDisabled = true;
  leftDisabled = true;
  movieCount: number;

  constructor() {
  }

  ngOnInit() {
    if (this.movies) {
      this.movieCount = this.movies.length;
    }
    this.MAX_MOVIE_RESULTS_COUNT = Constants.MAX_MOVIE_RESULTS_COUNT;
    this.setPagination();
  }

  expandDetails(index: number) {
    this.selectedIndex = index;
  }

  goLeft() {
    this.pageNumber -= 1;
    this.pagStart = (this.pageNumber - 1) * this.MAX_MOVIE_RESULTS_COUNT;
    this.pagEnd = this.pagStart + this.MAX_MOVIE_RESULTS_COUNT;
    this.rightDisabled = this.pageNumber * this.MAX_MOVIE_RESULTS_COUNT >= this.movieCount;
    this.leftDisabled = this.pagStart <= 0;
  }

  goRight() {
    this.pagStart = this.pageNumber * this.MAX_MOVIE_RESULTS_COUNT;
    this.pagEnd = this.pagStart + this.MAX_MOVIE_RESULTS_COUNT;
    this.pageNumber += 1;
    this.rightDisabled = this.pageNumber * this.MAX_MOVIE_RESULTS_COUNT >= this.movieCount;
    this.leftDisabled = this.pagStart <= 0;

  }

  // initial pagination variables setting
  setPagination() {
    if (this.movieCount && this.movieCount > 0) {
      this.pageNumber = 1;
      this.pagStart = 0;
      this.pagEnd = this.pagStart + this.MAX_MOVIE_RESULTS_COUNT;

      if (this.pageNumber * this.MAX_MOVIE_RESULTS_COUNT < this.movieCount) {
        this.rightDisabled = false;
        this.paginationAvailable = true;
      }
    }
  }
}
