import { Component, Input } from '@angular/core';
import { bootstrapStarFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { MovieCard } from '../../interface/IMovie';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIcon, CommonModule],
  viewProviders: [provideIcons({bootstrapStarFill})],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private router: Router){}

  @Input() public moviesData: MovieCard = {
    title: '',
    genre: '',
    img: '',
    rating: 0
  }

  moviesNavigate(title: string) {
    this.router.navigate([`/movie/${title}`]);
  }


}
