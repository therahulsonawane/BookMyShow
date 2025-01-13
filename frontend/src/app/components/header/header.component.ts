import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { localUser, LoginResponse } from '../../interface/types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  userInfo: localUser = {
    email: "",
    location: "",
    name: "",
    phone: "",
    type: "",
    userId: 0,
    username: ""
  };

  constructor(private routes: Router) {
    let data = localStorage.getItem("userInfo");
    if (data) {
      this.userInfo = JSON.parse(data);
      console.log(this.userInfo);
    }
  }

  logoPath = 'assets/images/logo.png';

  token: string | null = localStorage.getItem("token");


  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    this.token = null;
    location.reload();
    setTimeout(() => {
      this.routes.navigate(["/"]);
    }, 100)

  }

}
