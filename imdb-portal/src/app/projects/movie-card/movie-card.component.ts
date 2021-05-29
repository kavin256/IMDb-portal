import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieData} from '../../models/movie-data';

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

  constructor() {
  }

  ngOnInit() {
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
