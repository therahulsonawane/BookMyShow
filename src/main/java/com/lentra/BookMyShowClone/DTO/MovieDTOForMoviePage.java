package com.lentra.BookMyShowClone.DTO;

import com.lentra.BookMyShowClone.entity.Movie;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieDTOForMoviePage {

    private Integer movieId;
    private String title;
    private String img;
    private String genre;
    private String duration;
    private LocalDate releaseDate;
    private LocalDate endDate = LocalDate.parse("2024-12-31");
    private Double rating;
    private String description;
    private String language;

}
