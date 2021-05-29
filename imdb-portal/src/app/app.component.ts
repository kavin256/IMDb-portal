import { Component } from '@angular/core';
import {query} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imdb-portal';
  query: string;

  searchButtonClick(event: string) {
    this.query = event;
  }
}
