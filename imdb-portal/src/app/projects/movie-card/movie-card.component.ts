import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieData} from '../../models/movie-data';
import {Constants, Status} from '../../utils/Constants';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {ApiResponse} from '../../models/api-response';
import {DataLoaderService} from '../../services/data-loader.service';

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

  imageUrl: string;
  status: Status;
  errorMessage: string;

  constructor(
    private dataLoaderService: DataLoaderService
  ) {
  }

  ngOnInit() {
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

    // if the details are available already, no point of sending a details call
    if (ID && !(this.movie.Plot && this.movie.Plot && this.movie.Plot)) {
      let params = new HttpParams();
      params = params.append(Constants.API_KEY, Constants.API_KEY_VALUE);
      params = params.append(Constants.MOVIE_ID, ID);
      this.dataLoaderService.get<MovieData>(Constants.API_BASE_URL, params, new HttpHeaders())
        .then((data: ApiResponse) => {
          if (data.Response === 'True') {
            this.status = Status.results;
            this.mapDetails(data);
          } else if (data.Response === 'False') {
            this.status = Status.error;
            this.errorMessage = data.Error;
          }
        }).catch((e) => {
        this.status = Status.error;
        this.errorMessage = 'Something went wrong!';
      }).finally();
    }
  }

  private mapDetails(data: ApiResponse) {
    this.movie.Plot = data.Plot;
    this.movie.Actors = data.Actors;
    this.movie.Ratings = data.Ratings;
  }
}
