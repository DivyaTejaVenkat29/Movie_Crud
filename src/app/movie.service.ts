import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private hc: HttpClient) { }

  getMovies() {
    return this.hc.get('http://teja2906.pythonanywhere.com/movie/?format=json');
  }

  deleteMovie(id: number) {
    return this.hc.delete(`http://teja2906.pythonanywhere.com/movie/${id}/?format=json`);
  }

  createMovie(movieData: any) {
    return this.hc.post('http://teja2906.pythonanywhere.com/movie/?format=json', movieData);
  }

  updateMovie(updatedmovieData: any, id: number) {
    return this.hc.put(`http://teja2906.pythonanywhere.com/movie/${id}/?format=json`, updatedmovieData);
  }

  patchMovie(id: number, updatedmovieData: any) {
    return this.hc.patch(`http://teja2906.pythonanywhere.com/movie/${id}/?format=json`, updatedmovieData);
  }
}
