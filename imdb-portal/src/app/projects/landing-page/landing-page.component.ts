import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';
import {Constants} from '../../utils/Constants';
import {MovieData} from '../../models/movie-data';
import {ApiResponse} from '../../models/api-response';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public dataLoaderService: DataLoaderService
  ) {
  }

  status: Status;
  sub = new Subscription();
  errorMessage: string;
  query: string;

  ngOnInit() {

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
      // resetting the error
      this.status = Status.loading;
      this.errorMessage = '';

      const url = Constants.API_BASE_URL;
      let params = new HttpParams();
      params = params.append(Constants.API_KEY, Constants.API_KEY_VALUE);
      params = params.append(Constants.SEARCH_QUERY, query);
      this.dataLoaderService.get<MovieData>(url, params, new HttpHeaders())
        .then((data: ApiResponse) => {
          if (data.Response === 'True') {
            this.status = Status.results;
          } else if (data.Response === 'False') {
            this.status = Status.error;
            this.errorMessage = data.Error;
          }
        }).catch((e) => {
          console.error(e);
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
