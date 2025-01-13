package com.lentra.BookMyShowClone.controller;

import com.lentra.BookMyShowClone.entity.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class Home {

    @Autowired
    Response res;

    @GetMapping
    public ResponseEntity<Response> Greet() {
        res.setMessage("Hello From Book My Show Server!");
        res.setStatusCode(HttpStatus.OK.value());
        res.setSuccess(true);
        return new ResponseEntity<Response>(res, HttpStatus.OK);
    }

}
