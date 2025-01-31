package com.charity.donation.service;

import com.charity.donation.model.Users;
import com.charity.donation.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

/**
 * @author : Rohit Chapagain
 * @created : 1/23/2025, Thursday
 **/
@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    AuthenticationManager authManger;

    @Autowired
    JWTService jwtService;

    public Users register(Users user){
        return userRepo.save(user);
    }

    public String verify(Users user) {
        Authentication authentication = authManger.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        if(authentication.isAuthenticated()){
            return jwtService.generateToken(user.getUsername());
        }
        return "failuer";
    }
}
