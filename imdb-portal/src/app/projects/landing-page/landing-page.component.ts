import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants} from '../../utils/Constants';
import {MovieData} from '../../models/movie-data';
import {ApiResponse} from '../../models/api-response';
import {LogEngineService} from '../../services/log-engine.service';

/**
 * Author: Kavin Ranawella
 * Date: 2021-05-28
 */

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  logStatement: string;
  status: Status;
  movies: MovieData [];
  sub = new Subscription();
  errorMessage: string;
  query: string;

  constructor(
    public route: ActivatedRoute,
    public logService: LogEngineService,
    public dataLoaderService: DataLoaderService
  ) {
  }

  ngOnInit() {
    this.logStatement = this.logService.info('Application initialized!');

    // initially, display the welcome note
    this.status = Status.welcome;

    // obtain query from URL param
    this.sub = this.route
      .queryParams
      .subscribe(params => {

        // resetting URL
        window.history.replaceState({}, document.title, window.location.href.split('?')[0]);

        // search using the query obtained
        this.query = params.query;
        this.search(this.query);
      });
  }

  search(query: string): void {
    if (query) {
      this.logStatement = this.logService.info('Search init');

      // resetting the error
      this.status = Status.loading;
      this.errorMessage = '';

      // api GET call to get the movie list
      let params = new HttpParams();
      params = params.append(Constants.API_KEY, Constants.API_KEY_VALUE);
      params = params.append(Constants.SEARCH_QUERY, query);
      this.dataLoaderService.get<MovieData>(Constants.API_BASE_URL, params, new HttpHeaders())
        .then((data: ApiResponse) => {
          if (data.Response === 'True') {
            this.logStatement = this.logService.info('Search successful');
            this.status = Status.results;
            this.movies = data.Search;
          } else if (data.Response === 'False') {
            this.logStatement = this.logService.error('Search unsuccessful: ' + data.Error);
            this.status = Status.error;
            this.errorMessage = data.Error;
          }
        }).catch((e) => {
        this.status = Status.error;
        this.errorMessage = 'Something went wrong!';
        this.logStatement = this.logService.error('Search unsuccessful. Might not have reached the endpoint');
      }).finally();
    }
  }
}

export enum Status {
  welcome = 'welcome',
  error = 'error',
  loading = 'loading',
  results = 'results'
}
