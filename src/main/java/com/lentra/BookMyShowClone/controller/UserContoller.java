package com.lentra.BookMyShowClone.controller;

import com.lentra.BookMyShowClone.DTO.UserDTO;
import com.lentra.BookMyShowClone.entity.Response;
import com.lentra.BookMyShowClone.entity.Users;
import com.lentra.BookMyShowClone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/auth")
public class UserContoller {

    @Autowired
    private UserService userService;

    private Response response = new Response( );

    @PostMapping("/register")
    public ResponseEntity <Response> register(@RequestBody Users user) {
        if ( userService.registerUser(user) ) {
            response.setMessage("Welcome " + user.getName( ));
            response.setStatusCode(201);
            response.setSuccess(true);
            return new ResponseEntity <>(response , HttpStatus.CREATED);
        } else {
            response.setMessage("Something went wrong!");
            response.setStatusCode(HttpStatus.CONFLICT.value( ));
            response.setSuccess(false);
            return new ResponseEntity <>(response , HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity <Response> login(@RequestBody Users user) {

        String token = userService.verify(user);

        if ( token.equals("false") ) {
            response.setMessage("user does not exist!");
            response.setStatusCode(HttpStatus.NOT_FOUND.value( ));
            response.setSuccess(false);
            return new ResponseEntity <>(response , HttpStatus.NOT_FOUND);
        } else {
            response.setToken(token);
            response.setMessage("User login successfull!");
            response.setStatusCode(HttpStatus.OK.value( ));
            response.setSuccess(true);
            UserDTO dto = userService.contvertToUserDTO(userService.GetUserByUserName(user.getUsername()));
            response.setData(dto);
            return new ResponseEntity <>(response, HttpStatus.OK);
        }
    }

    @GetMapping("/allUsers")
    public ResponseEntity<?> getAllUsers() {
        return new ResponseEntity<>(userService.usersList(), HttpStatus.OK);
    }
}
