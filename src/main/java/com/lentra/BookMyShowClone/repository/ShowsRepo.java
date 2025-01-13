package com.lentra.BookMyShowClone.repository;

import com.lentra.BookMyShowClone.entity.Show;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowsRepo extends JpaRepository< Show, Integer> {

}
