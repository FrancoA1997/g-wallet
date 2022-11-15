package com.Gchange.demo.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;


@Entity
public class Activity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long activityId;

    @OneToOne(fetch = FetchType.EAGER)
    private customer userOnline;
    @OneToOne(fetch = FetchType.EAGER)
    private customer userTransfered;

    private String cvu;

    private String alias;
    private int balance;

    private String activityDate;

    public Activity() {
    }


    public Activity(Long activityId, customer userOnline, customer userTransfered, String cvu, String alias, int balance, String activityDate) {
        this.activityId = activityId;
        this.userOnline = userOnline;
        this.userTransfered = userTransfered;
        this.cvu = cvu;
        this.alias = alias;
        this.balance = balance;
        this.activityDate = activityDate;
    }

    public String getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(String activityDate) {
        this.activityDate = activityDate;
    }

    public String getCvu() {
        return cvu;
    }
    public void setCvu(String cvu) {
        this.cvu = cvu;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }

    public customer getUserOnline() {
        return userOnline;
    }

    public void setUserOnline(customer userOnline) {
        this.userOnline = userOnline;
    }

    public customer getUserTransfered() {
        return userTransfered;
    }

    public void setUserTransfered(customer userTransfered) {
        this.userTransfered = userTransfered;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
}
