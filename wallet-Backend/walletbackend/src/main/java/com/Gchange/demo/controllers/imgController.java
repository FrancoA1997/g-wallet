package com.Gchange.demo.controllers;

import com.Gchange.demo.entities.customer;
import com.Gchange.demo.repository.customerRepository;
import com.Gchange.demo.service.customerService;
import com.Gchange.demo.service.impl.customerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Level;
import java.util.logging.Logger;

    @RestController
    @RequestMapping("/image")
    @CrossOrigin("*")
    public class imgController {


        @Autowired
        private customerRepository userRepo;


        @GetMapping("/{email}")
        public ResponseEntity<byte[]> imagenUsuario(@PathVariable String email) throws Exception {
            try {
                System.out.println(email);
               customer user = userRepo.findByUsername(email);
                System.out.println(user.getEmail());
                if (user.getImg1() == null) {
                    throw new Exception("This user has no profile picture ");
                }
                byte[] img = user.getImg1().getContent();
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.IMAGE_JPEG);
                return new ResponseEntity<>(img, headers, HttpStatus.OK);
            } catch (Exception e) {
                Logger.getLogger(imgController.class.getName()).log(Level.SEVERE, null, e);
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }

}
