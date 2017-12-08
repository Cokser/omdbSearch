import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MoviesService} from "./movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {

  public movies: any[] = [];
  public movieList: any[] = [];
  public searchValue: string;
  public currentMovie: any;

  public error: string;

  constructor(private moviesService: MoviesService,
              private router: Router) {
  }

  ngOnInit() {
    this.movieList = this.moviesService.checkLocalMovies();
  }

  public searchMovies() {
    if (this.searchValue.length > 1) {
      this.moviesService.search(this.searchValue).subscribe(
        data => {
          this.movies = data.Search;
        },
        error => {
          this.error = 'The API is not currently available, please try later.';
        }
      );
    } else {
      this.movies = [];
    }
  }

  public changeCurrentMovie(movie: any) {
    this.currentMovie = movie;
  }

  public addToList(movie: any) {
    this.movieList.push(movie);
    this.moviesService.setLocalList(this.movieList);
  }

  public removeFromList(item: any) {
    this.movieList = this.movieList.filter(movie => movie.imdbID != item.imdbID);
    this.moviesService.setLocalList(this.movieList);
  }

  onSelectMovie(movie: any) {
    this.router.navigate(['movie', movie.imdbID]);
  }
}
