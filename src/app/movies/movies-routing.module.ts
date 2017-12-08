import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./movies.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
