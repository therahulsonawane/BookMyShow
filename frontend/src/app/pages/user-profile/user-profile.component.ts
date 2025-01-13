import { Component } from '@angular/core';
import { localUser } from '../../interface/types';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  userData: localUser = {
    email: '',
    location: '',
    name:'',
    phone: '',
    type: '',
    userId: 0,
    username: ''
  }; 
  constructor(private routes: Router){
    const user = localStorage.getItem("userInfo");
   if(user){
     this.userData = JSON.parse(user);
   }
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    this.routes.navigate(["/home"]);
    
    setTimeout(() => {
      location.reload();
    }, 100);

}
}
