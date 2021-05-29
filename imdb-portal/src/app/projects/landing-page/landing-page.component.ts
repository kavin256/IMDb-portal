import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
  ) {
  }

  sub = new Subscription();
  error: boolean;
  errorMessage: string;
  query: string;
  welcomeNoteVisible: boolean;

  ngOnInit() {

    // initially, display the welcome note
    this.welcomeNoteVisible = true;

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

  search(query: string) {
    if (query) {
    }
  }

}
