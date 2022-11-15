package com.Gchange.demo.repository;

import com.Gchange.demo.entities.customer;
import com.Gchange.demo.entities.wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface customerRepository extends JpaRepository<customer, String> {
    public customer findByUsername(String username);

    @Query("SELECT u FROM customer u WHERE u.userWallet.id = :id")
    public customer findUserByWallet(@Param("id") String id);
}
