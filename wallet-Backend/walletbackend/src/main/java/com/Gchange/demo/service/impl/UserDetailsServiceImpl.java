package com.Gchange.demo.service.impl;

import com.Gchange.demo.entities.customer;
import com.Gchange.demo.repository.customerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl  implements UserDetailsService {
    @Autowired
    private customerRepository UserRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        customer customer = this.UserRepo.findByUsername(username);
        if(customer == null){
            throw new UsernameNotFoundException("User not found");}
        return customer;
    }
}
