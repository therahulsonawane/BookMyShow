package com.lentra.BookMyShowClone.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "show")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Show {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer showId;

    @Column(nullable = false)
    private LocalTime time;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private LocalDate scheduleEndDate;

    @ManyToOne
    @JoinColumn(name = "movie_id", nullable = false) // Foreign key to movie
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "theater_id", nullable = false) // Foreign key to theater
    private Theater theater;
}
