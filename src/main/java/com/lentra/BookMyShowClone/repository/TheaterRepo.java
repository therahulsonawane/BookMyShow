package com.lentra.BookMyShowClone.repository;

import com.lentra.BookMyShowClone.entity.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheaterRepo extends JpaRepository< Theater, Integer> {
}
