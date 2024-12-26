import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovhttpService {

  url:string = "http://localhost:3000/movies"
  constructor(private http:HttpClient){}

  getAllMovies():Observable<any>
  {
    return this.http.get<any>(this.url);
  }


  submitRating(movieId: number, rating: { stars: string; comment: string }): Observable<any> {
    return this.http.post(`${this.url}/${movieId}/ratings`, rating);
  }
}
