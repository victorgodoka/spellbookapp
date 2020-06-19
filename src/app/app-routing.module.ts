import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "search", component: SearchResultsComponent },
  { path: "card/:card", component: CardProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
