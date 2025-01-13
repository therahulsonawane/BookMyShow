package com.lentra.BookMyShowClone.controller;

import com.lentra.BookMyShowClone.entity.Movie;
import com.lentra.BookMyShowClone.entity.Response;
import com.lentra.BookMyShowClone.service.MoviesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/movie")
public class MovieController {

    @Autowired
    private MoviesService service;

    @Autowired
    private Response response;

    @PostMapping("/create")
    public ResponseEntity<?> createMovie(@RequestBody Movie movie) throws IOException {  //    @RequestPart MultipartFile posterData
        System.out.println(movie);
        Optional<Movie> createdMovie = Optional.ofNullable(service.createMovie(movie));

        if (createdMovie.isPresent()) {
            response.setMessage("Movie is created!");
            response.setData(createdMovie);
            response.setStatusCode(201);
            response.setSuccess(true);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }

        response.setMessage("Something went wrong!");
        response.setStatusCode(HttpStatus.BAD_REQUEST.value());
        response.setSuccess(false);
        System.out.println("last log");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

    }

    @GetMapping("/get")
    public ResponseEntity<?> getAllMovie() {
        response.setMessage("Successful!");
        response.setData(service.allMovies());
        response.setStatusCode(200);
        response.setSuccess(true);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getMovie(@PathVariable int id) {
        Optional<Movie> movies1 = service.GetById(id);
        if (movies1.isPresent()) {
            return ResponseEntity.ok(movies1);
        } else {
            response.setMessage("Movie Not Found!");
            response.setSuccess(false);
            response.setStatusCode(404);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/card-movie")
    public ResponseEntity<?> getMoviesForHomePage() {
        List<Movie> movies = service.allMovies();
        response.setMessage("Successfully movies fetched!");
        response.setStatusCode(200);
        response.setSuccess(true);
        response.setData(service.cardMovieDTOList(movies));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
