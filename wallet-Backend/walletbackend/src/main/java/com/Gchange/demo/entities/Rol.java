package com.Gchange.demo.entities;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Entity
@Table(name = "roles")
public class Rol {

    @Id
    private Long RolId;

    private String RolName;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "rol")
    private Set<CustomerRol> customerRoles = new HashSet<>();

    public Rol() {

    }

    public Rol(Long rolId, String rolName) {
        RolId = rolId;
        RolName = rolName;
    }

    public Long getRolId() {
        return RolId;
    }

    public void setRolId(Long rolId) {
        RolId = rolId;
    }

    public String getRolName() {
        return RolName;
    }

    public void setRolName(String rolName) {
        RolName = rolName;
    }

    public Set<CustomerRol> getCustomerRoles() {
        return customerRoles;
    }

    public void setCustomerRoles(Set<CustomerRol> customerRoles) {
        this.customerRoles = customerRoles;
    }
}
