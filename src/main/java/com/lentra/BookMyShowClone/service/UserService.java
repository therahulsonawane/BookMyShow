package com.lentra.BookMyShowClone.service;

import com.lentra.BookMyShowClone.DTO.UserDTO;
import com.lentra.BookMyShowClone.entity.UserType;
import com.lentra.BookMyShowClone.entity.Users;
import com.lentra.BookMyShowClone.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private JWTService jwtService;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public boolean registerUser(Users user) {
        if ( repo.findByEmail(user.getEmail( )) == null ) {
            user.setPassword(encoder.encode(user.getPassword( )));
            if ( user.getType( ) == null ) {
                user.setType(UserType.USER);
            };
            user.setCreated_at(new Date( ));
            repo.save(user);
            return true;
        } else {
            return false;
        }
    }

    public Users GetUserByUserName(String username) {
        return repo.findByUsername(username);
    }

    public String verify(Users user) {
        Authentication authentication = manager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername( ) , user.getPassword( ))
        );
        if ( authentication.isAuthenticated( ) ) {
            return jwtService.generateToken(user.getUsername( ));
        }
        return "false";
    }

    public List <Users> usersList() {
        return repo
                .findAll( );
    }

    public UserDTO contvertToUserDTO(Users user) {
        UserDTO dto = new UserDTO( );
        dto.setName(user.getName( ));
        dto.setUserId(user.getUser_id( ));
        dto.setEmail(user.getEmail( ));
        dto.setUsername(dto.getUsername( ));
        dto.setLocation(user.getLocation( ));
        dto.setType(user.getType( ));
        dto.setPhone(user.getPhone( ));
        return dto;
    }

}
