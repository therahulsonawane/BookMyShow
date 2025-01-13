import { Component } from '@angular/core';
import { bootstrapArrowLeftCircleFill, bootstrapArrowRightCircleFill, bootstrapStarFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CardComponent } from '../../components/card/card.component';
import { MoviesServiceService } from '../../core/movieService/movies-service.service';
import { CardMovieApiResponse, MovieCard } from '../../interface/IMovie';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { localUser } from '../../interface/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIcon, RouterModule, CardComponent, CommonModule],
  viewProviders: [provideIcons({ bootstrapArrowLeftCircleFill, bootstrapArrowRightCircleFill })],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  public current: number = 0;

  public moviesData: MovieCard[] = [{
    title: '',
    genre: '',
    img: '',
    rating: 0
  }]

  userData: localUser = {
    email: '',
    location: '',
    name:'',
    phone: '',
    type: '',
    userId: 0,
    username: ''
  };

  constructor(private getMovies: MoviesServiceService, private router: Router) {

    const movieData = getMovies.getAllMovieForCard().subscribe({
      next: (res: CardMovieApiResponse) => {
        if (res.success === true) {
          this.moviesData = res.data
        }
        console.log(this.moviesData);
      }
    })

    const user = localStorage.getItem("userInfo");
    if(user){
      this.userData = JSON.parse(user);
      console.log(this.userData);
      
    }
    
    // this.moviesData = [
    //   {
    //     title: "Bhool Bhulaiyaa 3",
    //     genre: "Comedy, Horror",
    //     rating: 9.5,
    //     img: "https://www.classificationoffice.govt.nz/media/images/bhool_bhulaiyaa_3_flicks.width-700.jpg"
    //   },
    //   {
    //     title: "Dharmarakshak Mahaveer Chhatrapati Sambhaji Maharaj",
    //     genre: "Action, Drama, Historical, Period",
    //     rating: 9.0,
    //     img: "https://m.media-amazon.com/images/M/MV5BOTA3ZjJjYjMtNWY1Ni00NWUzLTkwZTEtZTViMGVhYzMwNDE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    //   },
    //   {
    //     title: "Singham Again",
    //     genre: "Action, Crime, Drama",
    //     rating: 9.6,
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11-2AOIk452pc46Br9d_Z7hGXzvaSIsKybw&s"
    //   },
    //   {
    //     title: "Moana 2",
    //     genre: "Adventure, Animation, Comedy, Fantasy",
    //     rating: 8.0,
    //     img: "https://m.media-amazon.com/images/I/91ma+sVqXgL._AC_UF1000,1000_QL80_.jpg"
    //   },
    //   {
    //     title: "Gladiator II",
    //     genre: "Action, Adventure, Drama",
    //     rating: 8.7,
    //     img: "https://assetscdn1.paytm.com/images/cinema/Gladiator--608x800-4f79cf90-8547-11ef-a9f3-bb0df457e7e9.jpg"
    //   },
    //   {
    //     title: "See",
    //     genre: "Action",
    //     rating: 8.8,
    //     img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17602423_b_v8_ab.jpg"
    //   }
    // ];


  }

  previousSlide() {
    if (this.current === 0) {
      this.current = this.images.length - 1;
    } else {
      this.current -= 1;
    }
  }

  nextSlide() {
    if (this.current === this.images.length - 1) {
      this.current = 0;
    } else {
      this.current += 1;
    }
  }

  images: string[] = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1730301672680_rahulduawebn.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1732278881289_sojbmsbanner1240x300.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1732022746355_1worldofchristmasatjioworlddrivewebshowcase1240x300.jpg"
  ]

}
