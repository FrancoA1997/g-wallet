package com.Gchange.demo.service.impl;


import com.Gchange.demo.entities.wallet;
import com.Gchange.demo.repository.walletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.Random;

@Service
public class walletServiceImpl {
    int numberAcc;

    @Autowired
    private walletRepository walletRepo;

    @Autowired
    private activitySeviceImpl activitySevice;


    @Transactional
    public wallet walletCreation(String name, String surname){
        wallet wallet = new wallet();

        wallet.setCvu(cvuGenerator());

        wallet.setAlias(aliasGenerator(name, surname));

        wallet.setAuthorization(true);
        walletRepo.save(wallet);
        return wallet;
    }


    private String cvuGenerator(){
        Random rnd = new Random();
        numberAcc = rnd.nextInt(999999999);

        String cvu = ("000000" + numberAcc);

        return cvu + numberAcc;

    }

    private String aliasGenerator(String name, String surname){

        String alias;
        String trim4digits = Integer.toString(numberAcc);
        trim4digits.substring(0, 4);

        alias = (name + "." + surname + "." + trim4digits);

        return alias;

    }
    public wallet searchWallet(String data) throws Exception {
            if(walletRepo.findWalletByCvu(data) != null) {
                return walletRepo.findWalletByCvu(data);
            }else if(walletRepo.findWalletByAlias(data) != null) {
                return walletRepo.findWalletByAlias(data);
            }else{
        return null;
            }
    }
    @Transactional
    public void transaction(wallet wallet){
    if(wallet.getCvu() != null && wallet.getBalance() != ' ' && wallet.getAlias() != null){
        wallet walletOnline = walletRepo.findWalletByCvu(wallet.getCvu());
        walletOnline.setBalance(walletOnline.getBalance() - wallet.getBalance());
        walletRepo.save(walletOnline);
        wallet walletReceiver = walletRepo.findWalletByAlias(wallet.getAlias());
        walletReceiver.setBalance(walletReceiver.getBalance() + wallet.getBalance());
        activitySevice.addActivity(wallet);
        walletRepo.save(walletReceiver);
    } else{
        System.out.println("There is a null property and the transaction cant be executed");
    }


    }
}
