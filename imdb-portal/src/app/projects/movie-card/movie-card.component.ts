import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieData} from '../../models/movie-data';
import {Constants} from '../../utils/Constants';

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

  API_KEY_VALUE: string = Constants.API_KEY_VALUE;
  imageUrl: string;

  constructor() {
  }

  ngOnInit() {
    // create image URL
    this.imageUrl = Constants.API_IMAGE_URL + Constants.SEPARATOR_QUES + Constants.API_KEY + Constants.SEPARATOR_EQUAL
      + Constants.API_KEY_VALUE + Constants.SEPARATOR_AMP + Constants.MOVIE_ID + Constants.SEPARATOR_EQUAL + this.movie.imdbID;

    // /?apikey={{API_KEY_VALUE}}&i={{movie.imdbID}};
    // this.imageUrl = http://img.omdbapi.com/?apikey={{API_KEY_VALUE}}&i={{movie.imdbID}};
  }

  details() {
    // for auto collapsing when a different one is expanded
    if (!this.fullWidth) {
      this.selectionEmitter.emit(this.index);
    } else {
      this.selectionEmitter.emit(null);
    }
  }
}
