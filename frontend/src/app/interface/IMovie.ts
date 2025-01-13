export interface MovieCard {
    title: string;
    genre: string;
    rating: number;
    img: string;
  }
  
  export interface CardMovieApiResponse {
    message: string;
    token: string | null;
    statusCode: number;
    success: boolean;
    data: MovieCard[];
  }
  
  export interface MovieResponse {
    message: string;
    token: string | null;
    statusCode: number;
    success: boolean;
    data: MovieData;
  }
  
  export interface MovieData {
    movieId: number;
    title: string;
    img: string;
    poster_data: string | null;
    poster_name: string | null;
    poster_type: string | null;
    genre: string;
    duration: string;
    releaseDate: string;
    endDate: string;
    rating: number;
    description: string;
    language: string;
  }
  