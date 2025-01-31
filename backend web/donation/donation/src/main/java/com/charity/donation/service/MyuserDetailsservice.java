package com.charity.donation.service;

import com.charity.donation.model.UserPrinciple;
import com.charity.donation.model.Users;
import com.charity.donation.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author : Rohit Chapagain
 * @created : 1/23/2025, Thursday
 **/
@Service
public class MyuserDetailsservice implements UserDetailsService {

    @Autowired
    private UserRepo user;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user1 = user.findByUsername(username);

        if (user1== null) {
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found");
        }
        return new UserPrinciple(user1);
    }
}
