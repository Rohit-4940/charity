package com.charity.donation.repo;

import com.charity.donation.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author : Rohit Chapagain
 * @created : 1/23/2025, Thursday
 **/
@Repository
public interface UserRepo extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
}
