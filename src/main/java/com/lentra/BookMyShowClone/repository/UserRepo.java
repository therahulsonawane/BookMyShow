package com.lentra.BookMyShowClone.repository;

import com.lentra.BookMyShowClone.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users, Integer> {
    Users findByEmail(String email);

    Users findByUsername(String username);
}
