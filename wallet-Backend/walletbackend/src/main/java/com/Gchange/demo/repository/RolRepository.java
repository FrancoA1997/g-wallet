package com.Gchange.demo.repository;

import com.Gchange.demo.entities.Rol;
import com.Gchange.demo.entities.customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository  extends JpaRepository <Rol, String> {

}
