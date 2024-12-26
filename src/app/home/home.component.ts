import { Component, OnInit } from '@angular/core';
import { MovhttpService } from '../service/movhttp.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movies: any[] = [];
  filteredMovies: any[] = [];
  searchTerm: string = '';
  genreTerm: string ='';
  starRating: string = '';

  constructor(private movservice:MovhttpService, public us:UserService){}


  ngOnInit(): void {
    this.movservice.getAllMovies().subscribe(resp => {
      console.log("Fetched Movies");
      console.log(resp);
      this.movies = resp;
      this.filteredMovies = [...this.movies];  // Initialize filteredMovies with all the movies
    });
  }

  // Filter movies based on the title
  filterMovies(): void {
    let filtered = this.movies;

    // Filter by title if searchTerm exists
    if (this.searchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Filter by genre if genreTerm exists
    if (this.genreTerm) {
      filtered = filtered.filter(movie =>
        movie.genre.toLowerCase().includes(this.genreTerm.toLowerCase())
      );
    }

    if (this.starRating) {
      filtered = filtered.filter(movie =>
        movie.ratings.some((rating: { stars: string }) => parseInt(rating.stars) >= parseInt(this.starRating)
      ));
    }

    this.filteredMovies = filtered;
  }


}
