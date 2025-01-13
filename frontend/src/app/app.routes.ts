import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateMovieComponent } from './pages/create-movie/create-movie.component';
import { CreateTheaterComponent } from './pages/create-theater/create-theater.component';
import { ShowComponent } from './pages/show/show.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "create-movie", component: CreateMovieComponent},
    {path: "create-theater", component: CreateTheaterComponent},
    {path: "create-show", component: ShowComponent},
    {path: "user-profile", component: UserProfileComponent},
    {path: "movie/:title", component: MoviePageComponent},
];
