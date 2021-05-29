import {Component, Input, OnInit} from '@angular/core';
import {MovieData} from '../../models/movie-data';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  @Input() movies: MovieData [];
  selectedIndex: number = null;

  constructor() { }

  ngOnInit() {
  }

  expandDetails(index: number) {
    this.selectedIndex = index;
  }
}
