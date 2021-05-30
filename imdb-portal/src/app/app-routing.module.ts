import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './projects/landing-page/landing-page.component';
import {ResultsPageComponent} from './projects/results-page/results-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'movie-results', component: ResultsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
