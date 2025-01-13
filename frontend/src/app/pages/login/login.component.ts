import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginResponse, UserLogin } from '../../interface/types';
import { AuthServiceService } from '../../core/auth/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: UserLogin = {
    username: '',
    password: ''
  };

  errorMessage = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.user).subscribe({
      next: (response: LoginResponse) => {

        if (response.success && response.token) {
          
          localStorage.setItem("token", ("Bearer " + response.token))
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          
          this.router.navigate(['/home']);

          setTimeout(() => {
            location.reload();
          }, 100)

        } else {
          console.log("Internal server error");
        }
      },

      error: (error: any) => {
        this.errorMessage = error.message || "Internal server error";
      }

    })
}
}