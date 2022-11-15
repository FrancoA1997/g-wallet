package com.Gchange.demo.entities;

import javax.persistence.*;

@Entity
public class CustomerRol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long usuarioRolId;

    @ManyToOne(fetch = FetchType.EAGER)
    private customer customer;

    @ManyToOne
    private Rol rol;


    public Long getUsuarioRolId() {
        return usuarioRolId;
    }

    public void setUsuarioRolId(Long usuarioRolId) {
        this.usuarioRolId = usuarioRolId;
    }

    public customer getCustomer() {
        return customer;
    }

    public void setCustomer(com.Gchange.demo.entities.customer customer) {
        this.customer = customer;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

}