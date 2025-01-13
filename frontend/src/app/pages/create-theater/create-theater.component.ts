import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Theater } from '../../interface/types';

@Component({
  selector: 'app-create-theater',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css'],
})
export class CreateTheaterComponent {
  TheaterData: Theater = {
    name: '',
    address: '',
    shows: [],
  };

  onSubmit() {
    console.log(this.TheaterData);
  }

}
