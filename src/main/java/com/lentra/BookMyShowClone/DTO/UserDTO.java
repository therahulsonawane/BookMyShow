package com.lentra.BookMyShowClone.DTO;

import com.lentra.BookMyShowClone.entity.UserType;
import com.lentra.BookMyShowClone.entity.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Integer userId;
    private String name;
    private String email;
    private String username;
    private String location;
    private UserType type;
    private String phone;

}

