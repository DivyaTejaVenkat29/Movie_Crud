import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private hc: HttpClient) { }

  getMovies() {
    return this.hc.get('https://apigenerator.dronahq.com/api/52BCbNyE/Movie_api');
  }

  deleteMovie(id: number) {
    return this.hc.delete(`https://apigenerator.dronahq.com/api/52BCbNyE/Movie_api/${id}`);
  }

  createMovie(movieData: any) {
    return this.hc.post('https://apigenerator.dronahq.com/api/52BCbNyE/Movie_api/', movieData);
  }

  updateMovie(updatedmovieData: any, id: number) {
    return this.hc.put(`https://apigenerator.dronahq.com/api/52BCbNyE/Movie_api/${id}`, updatedmovieData);
  }

  patchMovie(id: number, updatedmovieData: any) {
    return this.hc.patch(`https://apigenerator.dronahq.com/api/52BCbNyE/Movie_api/${id}`, updatedmovieData);
  }
}
