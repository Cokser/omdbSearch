import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MoviesModule} from "./movies/movies.module";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
