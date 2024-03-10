import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get<any[]>('https://movie-api-coral.vercel.app/api/movie/?format=json');
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`https://movie-api-coral.vercel.app/api/movie/${id}/`);
  }

  createMovie(movieData: any) {
    return this.httpClient.post('https://movie-api-coral.vercel.app/api/movie/', movieData);
  }

  updateMovie(updatedmovieData: any, id: number) {
    return this.httpClient.put(`https://movie-api-coral.vercel.app/api/movie/${id}/`, updatedmovieData);
  }

  patchMovie(id: number, updatedmovieData: any) {
    return this.httpClient.patch(`https://movie-api-coral.vercel.app/api/movie/${id}/`, updatedmovieData);
  }
}
