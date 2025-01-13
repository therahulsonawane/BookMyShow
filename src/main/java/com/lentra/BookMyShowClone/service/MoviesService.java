package com.lentra.BookMyShowClone.service;

import com.lentra.BookMyShowClone.DTO.MovieDTO;
import com.lentra.BookMyShowClone.DTO.MovieDTOForMoviePage;
import com.lentra.BookMyShowClone.entity.Movie;
import com.lentra.BookMyShowClone.repository.MoviesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MoviesService {

    @Autowired
    private MoviesRepo repo;

    public Movie createMovie(Movie movies) throws IOException {
//        if(poster_data != null){
//            movies.setPoster_name(poster_data.getOriginalFilename());
//            movies.setPoster_type(poster_data.getContentType());
//            movies.setPoster_data(poster_data.getBytes());
//        }
        return repo.save(movies);
    }

    public List<Movie> allMovies() {
        return repo.findAll();
    }

    public Optional <Movie> GetById(int id) {
        Optional <Movie> movies = repo.findById(id);
        return movies;
    }

    public MovieDTOForMoviePage movieToDto(Movie movie) {
        if (movie == null) {
            return null;
        }

        MovieDTOForMoviePage dto = new MovieDTOForMoviePage();

        dto.setMovieId(movie.getMovieId());
        dto.setTitle(movie.getTitle());
        dto.setImg(movie.getImg());
        dto.setGenre(movie.getGenre());
        dto.setDuration(movie.getDuration());
        dto.setReleaseDate(movie.getReleaseDate());
        dto.setRating(movie.getRating());
        dto.setDescription(movie.getDescription());
        dto.setLanguage(movie.getLanguage());

        return dto;
    }

    public MovieDTO CardMovieDTO(Movie movie){

        MovieDTO dto = new MovieDTO();
        dto.setImg(movie.getImg());
        dto.setTitle(movie.getTitle( ));
        dto.setGenre(movie.getGenre());
        dto.setRating(movie.getRating());

        return dto;
    }

    public List<MovieDTO> cardMovieDTOList(List<Movie> movies){

        List<MovieDTO> movieDTOList = new ArrayList <>(  );

        for (Movie movie : movies) {
            movieDTOList.add(CardMovieDTO(movie));
        }
        return movieDTOList;
    }

}
