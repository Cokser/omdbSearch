import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';

import {MoviesComponent} from './movies.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MoviesService} from './movies.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [
    MoviesComponent
  ],
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
  providers: [MoviesService]
})
export class MoviesModule {
}
