import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: any[] = [];
  filteredMovies: any[] = [];
  filterGenre: string = '';
  filterYear: string = '';
  sortBy: string = '';
  selectedYears: string[] = []
  showForm = false;
  movieId: number | null = null;
  movieName = '';
  movieGenre = '';
  movieYear: number | null = null;
  movieImageLink = '';
  editMode = false;
  genres: string[] = [];
  years: number[] = [];

  constructor(private movieService: MovieService) {
    this.loadMovies();

  }

  loadMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
      this.filteredMovies = this.movies.slice(); // Update filteredMovies when movies are loaded
      this.updateGenres();
      this.updateYears();
    });
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
    document.body.style.color='rgb(255, 255, 255)';
  }

  stop() {
    this.showForm = false;
    this.resetForm();
    document.body.style.backgroundColor = 'white';
    document.body.style.color='black';
  }

  update(id: number) {
      this.movieId = id;
      this.editMode = true;
      this.showForm = true;
      document.body.style.backgroundColor = 'rgba(0,0,0.4)'; // Change background color to black
      document.body.style.color='rgb(255, 255, 255)';
      const selectedMovie = this.movies.find(movie => movie.id === id);
      if (selectedMovie) {
        this.movieName = selectedMovie.movie_name;
        this.movieGenre = selectedMovie.genre;
        this.movieYear = selectedMovie.year;
        this.movieImageLink = selectedMovie.image;
      }
    
  }

  submitData() {
    const movieData = {
      movie_name: this.movieName,
      genre: this.movieGenre,
      year: this.movieYear,
      image: this.movieImageLink,
    };
    if (this.editMode) {
      // Update existing movie
      if (this.movieId) {
        this.movieService.updateMovie(movieData, this.movieId).subscribe(() => {
          this.loadMovies();
          this.stop();
        });
      }
    } else {
      // Create a new movie
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
  getUniqueValues(key: string, array: any[]): any[] {
    return Array.from(new Set(array.map(item => item[key])));
  }
  updateGenres() {
    this.genres = this.getUniqueValues('genre', this.filteredMovies);
  }

  // Helper method to update available years
  updateYears() {
    this.years = this.getUniqueValues('year', this.filteredMovies).sort((a, b) => a - b);
  }
  filterMovies() {
    // Filter movies based on selected filters
    this.filteredMovies = this.movies.filter(movie => {
      const genreMatch = !this.filterGenre || movie.genre === this.filterGenre;
      const yearMatch = !this.filterYear || movie.year.toString() === this.filterYear;
      const selectedYearsMatch = this.selectedYears.length === 0 || this.selectedYears.includes(movie.year.toString());
      return genreMatch && yearMatch && selectedYearsMatch;
    });

    // Sort filtered movies based on the selected sorting option
    if (this.sortBy === 'a-z') {
      this.filteredMovies.sort((a, b) => a.movie_name.localeCompare(b.movie_name));
    } else if (this.sortBy === 'z-a') {
      this.filteredMovies.sort((a, b) => b.movie_name.localeCompare(a.movie_name));
    } else if (this.sortBy === 'new-arrival') {
      this.filteredMovies.sort((a, b) => b.year - a.year);
    }
  }  

}