import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../core/auth/auth-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  user = {
    name: '',
    email: '',
    username: '',
    phone: '',
    location: '',
    password: ''
  };

  errorMessage: String = "";

  constructor(private authService: AuthServiceService, private router: Router){}

  onSubmit(){
    this.authService.register(this.user).subscribe({
      next: (res: any)=>{
        console.log(res);
        this.router.navigate(["/login"]);
      },
      error: (err: any)=>{
        this.errorMessage = err.message || 'Invalid credentials, please try again.';
        console.log(err);
      }
    })
  }

}
