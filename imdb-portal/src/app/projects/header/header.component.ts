import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LogEngineService} from '../../services/log-engine.service';

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
  logStatement: string;

  constructor(
    public logService: LogEngineService,
    public router: Router,
  ) {
  }

  ngOnInit() {
  }

  search() {
    if (this.query) {
      this.router.navigate([''], {queryParams: {query: this.query}}).then();
    } else {
      this.logStatement = this.logService.warn('Search query is empty');
    }
  }
}
