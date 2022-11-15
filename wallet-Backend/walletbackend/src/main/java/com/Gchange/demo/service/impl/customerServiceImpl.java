package com.Gchange.demo.service.impl;

import com.Gchange.demo.entities.CustomerRol;
import com.Gchange.demo.entities.customer;
import com.Gchange.demo.repository.RolRepository;
import com.Gchange.demo.repository.customerRepository;
import com.Gchange.demo.repository.walletRepository;
import com.Gchange.demo.service.customerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.Set;

@Service
public class customerServiceImpl implements customerService {

    @Autowired
    private RolRepository rolRepo;
    @Autowired
    private imgServiceImpl imgService;
    @Autowired
    private customerRepository userRepo;
    @Autowired
    private walletServiceImpl walletService;
    @Autowired
    private walletRepository walletRepo;
    @Override
    public customer saveUser(customer customer, Set<CustomerRol> customerRoles) throws Exception {
        customer localUser = userRepo.findByUsername(customer.getUsername());
        if(localUser != null){
            System.out.println("This user already exist!");
            throw new Exception("This user already exist");
        }
        else{
            for(CustomerRol customerRol : customerRoles){
                rolRepo.save(customerRol.getRol());
            }
            customer.getCustomerRoles().addAll(customerRoles);
            customer.setUserWallet(walletService.walletCreation(customer.getFirstName(), customer.getSecondName()));
            localUser = userRepo.save(customer);
        }
        return null;
    }

    @Transactional
    public customer updateUser(customer user, MultipartFile file) throws Exception{
        customer currentUser = userRepo.findByUsername(user.getUsername());

        if(user.getFirstName() != null && user.getFirstName() != ""){
            currentUser.setFirstName(user.getFirstName());
        }
        if(user.getSecondName() != null && user.getSecondName() != ""){
            currentUser.setSecondName(user.getSecondName());

        }
        if (user.getEmail() != null && user.getEmail() != "") {
            currentUser.setEmail(user.getEmail());
            currentUser.setUsername(user.getEmail());

        }
        if (user.getAddress() != null && user.getAddress() != "") {
            currentUser.setAddress(user.getAddress());


        }
        if (user.getPhoneNumber() != null && user.getPhoneNumber() != "") {
            currentUser.setPhoneNumber(user.getPhoneNumber());

        }

        if(file == null){
           currentUser.setImg1(null);
        } else {
            currentUser.setImg1(imgService.multiPartToEntity(file));
        }
        return userRepo.save(currentUser);
    }
    public customer findUserByWallet(String id){
        return userRepo.findUserByWallet(id);
    }

    @Override
    public customer getUser(String username) {
      return userRepo.findByUsername(username);
    }

    @Override
    public void deleteUser(String id) {
        customer c = userRepo.findUserByWallet(id);
        userRepo.deleteById(c.getId());
        walletRepo.deleteById(id);

    }
}
