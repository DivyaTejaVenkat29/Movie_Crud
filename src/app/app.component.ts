import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: any[] = [];
  showForm = false;
  movieId: number | null = null;
  movieName = '';
  movieGenre = '';
  movieYear: number | null = null;
  movieImageLink = '';
  editMode = false;

  constructor(private movieService: MovieService) {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe((data: any) => this.movies = data);
  }

  remove(id: number) {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      this.movieService.deleteMovie(id).subscribe(() => {
        this.movies = this.movies.filter(movie => movie.id !== id);
      });
    }
  }

  add() {
    this.showForm = true;
    this.resetForm();
    document.body.style.backgroundColor = 'rgba(0,0,0.4)'; // Change background color to black
  }

  stop() {
    this.showForm = false;
    this.resetForm();
    document.body.style.backgroundColor = 'white';
  }

  update(id: number) {
      this.movieId = id;
      this.editMode = true;
      this.showForm = true;
      document.body.style.backgroundColor = 'rgba(0,0,0.4)'; // Change background color to black
    
  }

  submitData() {
    const movieData = {
      movie_name: this.movieName,
      genre: this.movieGenre,
      year: this.movieYear,
      image: this.movieImageLink,
    };
    if (this.editMode) {
      this.movieService.updateMovie(movieData, this.movieId!).subscribe(() => {
        this.loadMovies();
        this.stop();
      });
    } else {
      this.movieService.createMovie(movieData).subscribe(() => {
        this.loadMovies();
        this.stop();
      });
    }
  }

  patchData() {
    const movieData = {
      movie_name: this.movieName,
      genre: this.movieGenre,
      year: this.movieYear,
      image: this.movieImageLink,
    };
    if (this.movieId) {
      this.movieService.patchMovie(this.movieId, movieData).subscribe(() => {
        this.loadMovies();
        this.stop();
      });
    }
  }

  resetForm() {
    this.movieId = null;
    this.movieName = '';
    this.movieGenre = '';
    this.movieYear = null;
    this.movieImageLink = '';
    this.editMode = false;
  }
}
