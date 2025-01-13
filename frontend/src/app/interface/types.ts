export interface UserRegistration {
  userId?: number;
  name?: string;
  email: string;
  username: string;
  phone: string;
  location?: string;
  password?: string;
  type?: UserType;
  createdAt?: Date;
}

export interface UserLogin {
  username: string;
  password: string;
}

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

export interface localUser {
  userId: number;
  name: string;
  email: string;
  username: string | null;
  location: string;
  type: string;
  phone: string;
};

export interface LoginResponse {
  message: string;
  token: string;
  statusCode: number;
  success: boolean;
  data: {
      userId: number;
      name: string;
      email: string;
      username: string | null;
      location: string;
      type: string;
      phone: string;
  };
}

export interface Movie{
  title: string;
  genre: string;
  duration: string;
  releaseDate: string;
  endDate: string;
  img: string;
  rating: number;
  description: string;
  language: string;
  poster_data: string | null,
  poster_name: string | null,
  poster_type: string | null,
}

export interface Show {
}

export interface Theater {
  id?: number;
  name: string;
  address: string;
  shows?: string[]; 
}


export interface Show {
  showId?: number; 
  time: string;
  date: string; 
  scheduleEndDate: string;
  movieId: number;
  theaterId: number; 
}