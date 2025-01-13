import { Component } from '@angular/core';
import { Show } from '../../interface/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})

export class ShowComponent {
  ShowData: Show = {
    time: '',
    date: '',
    scheduleEndDate: '',
    movieId: 0,
    theaterId: 0,
  }

  onSubmit() {
    console.log(this.ShowData);
  }
}
