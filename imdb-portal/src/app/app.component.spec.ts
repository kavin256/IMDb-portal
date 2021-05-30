import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './projects/header/header.component';
import {LandingPageComponent} from './projects/landing-page/landing-page.component';
import {FooterComponent} from './projects/footer/footer.component';
import {ResultsPageComponent} from './projects/results-page/results-page.component';
import {FormsModule} from '@angular/forms';
import { MovieCardComponent } from './projects/movie-card/movie-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        LandingPageComponent,
        FooterComponent,
        ResultsPageComponent,
        MovieCardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'imdb-portal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('imdb-portal');
  });

});
