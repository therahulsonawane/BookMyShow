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
public class MovieDTO {

    private String title;
    private String genre;
    private Double rating;
    private String img;

}

