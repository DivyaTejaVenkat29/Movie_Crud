import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies() {
    return this.httpClient.get<any[]>('http://teja2906.pythonanywhere.com/movie/?format=json');
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`http://teja2906.pythonanywhere.com/movie/${id}/`);
  }

  createMovie(movieData: any) {
    return this.httpClient.post('http://teja2906.pythonanywhere.com/movie/', movieData);
  }

  updateMovie(updatedmovieData: any, id: number) {
    return this.httpClient.put(`http://teja2906.pythonanywhere.com/movie/${id}/`, updatedmovieData);
  }

  patchMovie(id: number, updatedmovieData: any) {
    return this.httpClient.patch(`http://teja2906.pythonanywhere.com/movie/${id}/`, updatedmovieData);
  }
}
