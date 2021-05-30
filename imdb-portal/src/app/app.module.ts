import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './projects/header/header.component';
import {LandingPageComponent} from './projects/landing-page/landing-page.component';
import {FooterComponent} from './projects/footer/footer.component';
import {ResultsPageComponent} from './projects/results-page/results-page.component';
import {FormsModule} from '@angular/forms';
import { MovieCardComponent } from './projects/movie-card/movie-card.component';
import {LogEngineService} from './services/log-engine.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    ResultsPageComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogEngineService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
