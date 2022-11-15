package com.Gchange.demo.controllers;

import com.Gchange.demo.entities.CustomerRol;
import com.Gchange.demo.entities.Rol;
import com.Gchange.demo.entities.customer;
import com.Gchange.demo.repository.customerRepository;
import com.Gchange.demo.service.customerService;
import com.Gchange.demo.service.impl.customerServiceImpl;
import com.Gchange.demo.service.impl.walletServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class userController {
    @Autowired
    private customerService userService;
    @Autowired
    private customerRepository userRepo;
    @Autowired
    private customerServiceImpl customerService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private walletServiceImpl walletService;
    @PostMapping("/")
    public customer saveUser(@RequestBody customer customer) throws Exception {
        customer.setPassword(this.passwordEncoder.encode(customer.getPassword()));
        Set<CustomerRol> customerRoles = new HashSet<>();
        Rol rol = new Rol();
        rol.setRolId(2l);
        rol.setRolName("NORMAL");


        CustomerRol userRol = new CustomerRol();
        userRol.setCustomer(customer);
        userRol.setRol(rol);
        customerRoles.add(userRol);
        return userService.saveUser(customer, customerRoles);
   }
   @PostMapping(value = {"/editProfile"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
   public customer updateProfile(@RequestPart("customer"  ) customer customer,
                                 @RequestPart(value = "imgFile", required = false)MultipartFile file  ) throws Exception{

       return customerService.updateUser(customer, file);
   }
    @GetMapping("/{email}")
    public customer getUser(@PathVariable ("email") String email){return userService.getUser(email);}

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") String userId){
        userService.deleteUser(userId);
    }

     @PostMapping("/changePassword")
    public void changePassword(@RequestBody customer customer){
        customer c1 = userRepo.findByUsername(customer.getUsername());
        c1.setPassword(this.passwordEncoder.encode(customer.getPassword()));
        userRepo.save(c1);
}
}
