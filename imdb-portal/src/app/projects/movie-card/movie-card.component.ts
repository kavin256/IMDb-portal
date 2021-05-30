import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieData} from '../../models/movie-data';
import {Constants, Status} from '../../utils/Constants';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ApiResponse} from '../../models/api-response';
import {DataLoaderService} from '../../services/data-loader.service';
import {LogEngineService} from '../../services/log-engine.service';

/**
 * Author: Kavin Ranawella
 * Date: 2021-05-28
 */

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: MovieData;
  @Input() fullWidth: boolean;
  @Input() index: number;
  @Output() selectionEmitter = new EventEmitter<number>();

  logStatement: string;
  imageUrl: string;
  status: Status;
  errorMessage: string;

  constructor(
    public dataLoaderService: DataLoaderService,
    public logService: LogEngineService
  ) {
  }

  ngOnInit() {
    // using logger since this component includes API communications
    this.logStatement = 'Logger Initialized';

    // create image URL
    if (this.movie) {
      this.imageUrl = Constants.API_IMAGE_URL + Constants.SEPARATOR_QUES + Constants.API_KEY + Constants.SEPARATOR_EQUAL
        + Constants.API_KEY_VALUE + Constants.SEPARATOR_AMP + Constants.MOVIE_ID + Constants.SEPARATOR_EQUAL + this.movie.imdbID;
    }
  }

  details() {
    // for auto collapsing when a different one is expanded
    if (!this.fullWidth) {
      this.selectionEmitter.emit(this.index);
      this.detailSearch(this.movie.imdbID);
    } else {
      this.selectionEmitter.emit(null);
    }
  }

  detailSearch(ID: string): void {
    this.logStatement = this.logService.info('Movies detail search initiated');

    // if the details are available already, no point of sending a details call
    if (ID && !(this.movie.Plot && this.movie.Plot && this.movie.Plot)) {
      let params = new HttpParams();
      params = params.append(Constants.API_KEY, Constants.API_KEY_VALUE);
      params = params.append(Constants.MOVIE_ID, ID);
      this.dataLoaderService.get<MovieData>(Constants.API_BASE_URL, params, new HttpHeaders())
        .then((data: ApiResponse) => {
          if (data.Response === 'True') {
            this.logStatement = this.logService.info('Movie detail search successful');
            this.status = Status.results;
            this.mapDetails(data);
          } else if (data.Response === 'False') {
            this.logStatement = this.logService.error('Movie detail search error');
            this.status = Status.error;
            this.errorMessage = data.Error;
          }
        }).catch((e) => {
        this.status = Status.error;
        this.logStatement = this.logService.error('Movie detail search error. Might not have reached the endpoint');
        this.errorMessage = 'Something went wrong!';
      }).finally();
    }
  }

  private mapDetails(data: ApiResponse) {
    this.movie.Plot = data.Plot;
    this.movie.Actors = data.Actors;
    this.movie.Ratings = data.Ratings;
    this.logStatement = this.logService.info('Movie detail mapping');
  }
}
