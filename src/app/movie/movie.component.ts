import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie';
import { MovhttpService } from '../service/movhttp.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-movie',
  standalone: false,

  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  @Input()
  movie: Movie;

  newRating = { stars: '', comment: '' };


  constructor(private ratingService: MovhttpService, public us:UserService) {
    this.movie = {
      MID: 1,
      title: '',
      year: 0,
      genre: '',
      director: '',
      ratings: []
    }
  }

  submitRating(): void {
    const ratingToAdd = {
      stars: this.newRating.stars,
      comment: this.newRating.comment,
    };

    // Call the service to submit the rating
    this.ratingService.submitRating(this.movie.MID, ratingToAdd).subscribe(
      (response) => {
        console.log('Rating added successfully:', response);

        // Add the rating to the movie object
        this.movie.ratings.push(ratingToAdd);
        // Reset the form
        this.newRating = { stars: '', comment: '' };
      },
      (error) => {
        console.error('Error adding rating:', error);
      }
    );
  }

}
