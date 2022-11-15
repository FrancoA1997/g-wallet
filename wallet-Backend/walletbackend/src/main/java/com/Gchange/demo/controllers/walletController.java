package com.Gchange.demo.controllers;

import com.Gchange.demo.entities.customer;
import com.Gchange.demo.entities.wallet;
import com.Gchange.demo.service.impl.customerServiceImpl;
import com.Gchange.demo.service.impl.walletServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/wallet")
@CrossOrigin("*")
public class walletController {

    @Autowired
    private walletServiceImpl walletService;
    @Autowired
    private customerServiceImpl customerService;


    @PostMapping("/requestData")
    public customer requestDataT(@RequestBody String data)throws Exception{
        customer c1 = new customer();
        wallet w1 = walletService.searchWallet(data);
        if(w1 == null){
            return null;
        } else if(w1 != null){
          c1 = customerService.findUserByWallet(w1.getId());
        }
        return c1;
    }

    @PostMapping("/transaction")
        public void transactionHandler(@RequestBody wallet wallet1)throws Exception{
        if(wallet1.getAlias() != null && wallet1.getBalance() != ' ' && wallet1.getCvu() != null) {
            walletService.transaction(wallet1);
        }else{
        throw new Exception("There was an empty field, transaction cannot be executed");
    }
    }
}
