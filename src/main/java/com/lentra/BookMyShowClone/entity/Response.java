package com.lentra.BookMyShowClone.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Response {
    private String message;
    private String token;
    private int statusCode;
    private boolean success;
    private Object data;
}
