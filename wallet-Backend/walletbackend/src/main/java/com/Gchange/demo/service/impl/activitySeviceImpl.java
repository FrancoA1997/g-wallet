package com.Gchange.demo.service.impl;

import com.Gchange.demo.entities.Activity;
import com.Gchange.demo.entities.CustomerRol;
import com.Gchange.demo.entities.customer;
import com.Gchange.demo.entities.wallet;
import com.Gchange.demo.repository.activityRepository;
import com.Gchange.demo.repository.customerRepository;
import com.Gchange.demo.repository.walletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.Date;
import javax.transaction.Transactional;

@Service
public class activitySeviceImpl {

    @Autowired
    private activityRepository activityRepo;
    @Autowired
    private walletRepository walletRepo;
    @Autowired
    private customerRepository userRepo;


    @Transactional
    public void addActivity(wallet wallet){
        customer userOnline = userRepo.findUserByWallet(walletRepo.findWalletByCvu(wallet.getCvu()).getId());
        customer userTransfered = userRepo.findUserByWallet(walletRepo.findWalletByAlias(wallet.getAlias()).getId());
        int balance = wallet.getBalance();
        Activity activity = new Activity();
        activity.setUserOnline(userOnline);
        activity.setUserTransfered(userTransfered);
        activity.setBalance(wallet.getBalance());
        activity.setCvu(wallet.getCvu());
        activity.setAlias(wallet.getAlias());
        activity.setActivityDate(getCurrentDate());
        userOnline.getUserActivity().add(activity);
        userRepo.save(userOnline);

    }
    @Transactional
    public String getCurrentDate() {
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yy");
        String str = formatter.format(date);
        System.out.print("Current date: "+str);
        return str;
    }
    public String removeFirstandLast(String str) {
        str = str.substring(1, str.length() - 1);
        return str;
    }
}
