import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Author: Kavin Ranawella
 * Date: 2021-05-28
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: string;
  headerTitle = 'OMDB Search';
  searchLabel = 'Search a movie';

  constructor(
    public router: Router,
  ) {
  }

  ngOnInit() {
  }

  search() {
    this.router.navigate([''], {queryParams: {query: this.query}}).then();
  }
}
