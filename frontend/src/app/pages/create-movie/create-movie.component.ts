import { Component } from '@angular/core';
import { Movie } from '../../interface/types';
import { FormsModule } from '@angular/forms';
import { MoviesServiceService } from '../../core/movieService/movies-service.service';

@Component({
  selector: 'app-create-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent {

  MovieData: Movie = {
    title: '',
    genre: '',
    duration: '',
    endDate: '',
    rating: 8,
    poster_data: null,
    poster_name: null,
    poster_type: null,
    releaseDate: '',
    description: '',
    language: '',
    img: ''
  };

  hours: number = 2;
  minutes: number = 23;
  seconds: number = 0;

  constructor(private moviesService: MoviesServiceService) { }

  onSubmit() {

    this.MovieData.duration = `${this.hours}h ${this.minutes}m ${this.seconds}s`;
    console.log(this.MovieData);
    
    this.moviesService.createMovie(this.MovieData).subscribe(
      (response) => {
        console.log('Movie created successfully:', response);
        alert('Movie created successfully!');
        this.resetForm();
      }
    );
  }

  resetForm() {
    this.MovieData = {
      title: '',
      genre: '',
      duration: '',
      endDate: '',
      rating: 0,
      releaseDate: '',
      description: '',
      language: '',
      img: '',
      poster_data: null,
      poster_name: null,
      poster_type: null
    };
  }

}
