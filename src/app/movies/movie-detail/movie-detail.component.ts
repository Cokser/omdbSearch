import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movieId: string;
  public movie: any;

  constructor(private movieService: MoviesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.movie = '';
    this.movieId = this.route.snapshot.params['id'];
    this.movieService.getMovie(this.movieId)
      .subscribe((movie) => {
        this.movie = movie;
      });
  }

  public backToList() {
    this.router.navigate(['/movies']);
  }

}
