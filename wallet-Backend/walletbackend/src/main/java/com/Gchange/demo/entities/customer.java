package com.Gchange.demo.entities;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Entity

public class customer implements UserDetails {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Activity> userActivity = new HashSet<>();

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String secondName;

    @OneToOne
    private img img1;

    @OneToOne
    private wallet userWallet;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String username;

    @Column(nullable = false)
    private String password;



    private Integer age;
    private String phoneNumber;
    private String address;
    private Boolean enabled = true;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "customer")
    @JsonIgnore
    private Set<CustomerRol> customerRoles = new HashSet<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public img getImg1() {
        return img1;
    }

    public void setImg1(img img1) {
        this.img1 = img1;
    }

    public wallet getUserWallet() {
        return userWallet;
    }

    public void setUserWallet(wallet userWallet) {
        this.userWallet = userWallet;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<Authority> autoridades = new HashSet<>();
        this.customerRoles.forEach(customerRol -> {
            autoridades.add(new Authority(customerRol.getRol().getRolName()));
        });
        return autoridades;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Set<CustomerRol> getCustomerRoles() {
        return customerRoles;
    }

    public void setCustomerRoles(Set<CustomerRol> customerRoles) {
        this.customerRoles = customerRoles;
    }

    public Set<Activity> getUserActivity() {
        return userActivity;
    }

    public void setUserActivity(Set<Activity> userActivity) {
        this.userActivity = userActivity;
    }

    public customer() {
    }

    public customer(String id, Set<Activity> userActivity, String firstName, String secondName, img img1, wallet userWallet, String email, String username, String password, Integer age, String phoneNumber, String address, Boolean enabled, Set<CustomerRol> customerRoles) {
        this.id = id;
        this.userActivity = userActivity;
        this.firstName = firstName;
        this.secondName = secondName;
        this.img1 = img1;
        this.userWallet = userWallet;
        this.email = email;
        this.username = username;
        this.password = password;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.enabled = enabled;
        this.customerRoles = customerRoles;
    }
}
