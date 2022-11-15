package com.Gchange.demo.controllers;

import com.Gchange.demo.config.JwtUtils;
import com.Gchange.demo.entities.JwtRequest;
import com.Gchange.demo.entities.JwtResponse;
import com.Gchange.demo.entities.customer;
import com.Gchange.demo.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
        try{

        Authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());

        }catch(UsernameNotFoundException usernameNotFoundException){
            usernameNotFoundException.printStackTrace();
        throw new Exception("User email not found" + usernameNotFoundException.getMessage());
        }
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
                String token = this.jwtUtils.generateToken(userDetails);
                return ResponseEntity.ok(new JwtResponse(token));
    }
    private void Authenticate(String username, String password) throws Exception{
        try{
            System.out.println(username +  " " + password);
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        }catch (DisabledException disabledException){
        throw new Exception("User disabled " + disabledException.getMessage());
        }catch (BadCredentialsException badCredentialsException){
        throw new Exception("Invalid Credentials" + badCredentialsException.getMessage());
        }
    }
    @GetMapping("/current-user")
    public customer getCurrentUser(Principal principal){
    return (customer) this.userDetailsService.loadUserByUsername(principal.getName());
    }
}
