package com.Gchange.demo.service;

import com.Gchange.demo.entities.CustomerRol;
import com.Gchange.demo.entities.customer;

import java.util.Set;

public interface customerService {

    public customer saveUser(customer customer, Set<CustomerRol> customerRoles) throws Exception;

    public customer getUser(String email);

    public void deleteUser(String id);



}