import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MoviesServiceService } from '../../core/movieService/movies-service.service';
import { MovieData, MovieResponse } from '../../interface/IMovie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent {

  title: String = '';

  movie: MovieData = {
    title: '',
    description: '',
    duration: '',
    endDate: '',
    genre: '',
    img: '',
    language: '',
    movieId: 0,
    poster_data: '',
    poster_name: '',
    poster_type: '',
    rating: 0,
    releaseDate: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieApi: MoviesServiceService
  ) {
    this.title = this.route.snapshot.params['title'];
    this.GetMovie();
  }

  GetMovie() {

    const movies: MovieData[] = [
      {
        movieId: 1,
        title: "Bhool Bhulaiyaa 3",
        img: "https://www.classificationoffice.govt.nz/media/images/bhool_bhulaiyaa_3_flicks.width-700.jpg",
        poster_data: null,
        poster_name: null,
        poster_type: null,
        genre: "Comedy, Horror",
        duration: "2h 35m 0s",
        releaseDate: "2024-11-18",
        endDate: "2024-12-31",
        rating: 9.5,
        description: "Gear up to tickle your funny bones with some thrill. The gates of `haveli` will now open again for Bhool Bhulaiyaa 3!",
        language: "Hindi"
      },
      {
        movieId: 2,
        title: "Dharmarakshak Mahaveer Chhatrapati Sambhaji Maharaj",
        img: "https://m.media-amazon.com/images/M/MV5BOTA3ZjJjYjMtNWY1Ni00NWUzLTkwZTEtZTViMGVhYzMwNDE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        poster_data: null,
        poster_name: null,
        poster_type: null,
        genre: " Action , Drama , Historical , Period",
        duration: "2h 35m 0s",
        releaseDate: "2024-11-22",
        endDate: "2024-12-28",
        rating: 9.0,
        description: "Dharmarakshak Mahaveer Chhatrapati Sambhaji Maharaj is a multilingual movie starring Thakur Anoop Singh, Amruta Khanvilkar, Pradeep Rawat and Ujjwal Chopra in prominent roles. It is directed by Tushar Shelar.",
        language: "Hindi"
      },
      {
        movieId: 3,
        title: "Singham Again",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11-2AOIk452pc46Br9d_Z7hGXzvaSIsKybw&s",
        poster_data: null,
        poster_name: null,
        poster_type: null,
        genre: "Action, Crime, Drama",
        duration: "2h 37m 0s",
        releaseDate: "2024-11-18",
        endDate: "2024-12-31",
        rating: 9.6,
        description: "In the third installment of Singham series, the valiant cop Bajirao Singham and his team of brave hearts embark on a cross-border mission to rescue his beloved wife, Avni Singham, who has been abducted by a formidable antagonist. Upholding its legacy of never letting you down-never has, never will-this installment promises a fierce battle between good and evil. This timeless struggle will once again be fought through the indomitable spirit of Bajirao Singham. The legendary roar that began 13 years ago continues to resonate in the hearts of the audience.",
        language: "Hindi"
      },
      {
        movieId: 4,
        title: "Moana 2",
        img: "https://m.media-amazon.com/images/I/91ma+sVqXgL._AC_UF1000,1000_QL80_.jpg",
        poster_data: null,
        poster_name: null,
        poster_type: null,
        genre: "Adventure , Animation , Comedy , Fantasy",
        duration: "1h 32m 0s",
        releaseDate: "2024-11-11",
        endDate: "2024-12-20",
        rating: 8.0,
        description: "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she`s ever faced.",
        language: "English"
      },
      {
        movieId: 5,
        title: "Gladiator II",
        img: "https://assetscdn1.paytm.com/images/cinema/Gladiator--608x800-4f79cf90-8547-11ef-a9f3-bb0df457e7e9.jpg",
        poster_data: null,
        poster_name: null,
        poster_type: null,
        genre: "Action , Adventure , Drama",
        duration: "2h 32m 0s",
        releaseDate: "2025-01-03",
        endDate: "2025-02-02",
        rating: 8.7,
        description: "From legendary director Ridley Scott, Gladiator II continues the epic saga of power, intrigue, and vengeance set in Ancient Rome. Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius (Paul Mescal) is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        language: "English"
      },
      {
        movieId: 6,
        title: "See",
        img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17602423_b_v8_ab.jpg",
        poster_data: null,
        poster_name: null,
        poster_type: null,
        genre: "Action",
        duration: "2h 23m 0s",
        releaseDate: "2023-12-23",
        endDate: "2024-03-03",
        rating: 8.8,
        description: "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive.",
        language: "English"
      }
    ];

    movies.find((movie, index)=> {
      if(movie.title === this.title){
        this.movie = movie;
      }
    })
  }

}
// function index(value: Movie, index: number, obj: Movie[]): value is any {
//   throw new Error('Function not implemented.');
// }

