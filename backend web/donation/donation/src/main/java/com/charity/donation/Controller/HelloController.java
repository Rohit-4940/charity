package com.charity.donation.Controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author : Rohit Chapagain
 * @created : 1/23/2025, Thursday
 **/
@RestController
public class HelloController {


    @GetMapping("")
    public String Greet(HttpServletRequest request){
        return "Hello World " + request.getSession().getId();
    }
}
