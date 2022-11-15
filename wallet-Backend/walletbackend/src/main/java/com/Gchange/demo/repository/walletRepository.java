package com.Gchange.demo.repository;

import com.Gchange.demo.entities.wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface walletRepository extends JpaRepository<wallet, String> {


    @Query("SELECT u FROM wallet u WHERE u.cvu = :cvu")
    public wallet findWalletByCvu(@Param("cvu") String cvu);

    @Query("SELECT u FROM wallet u WHERE u.alias = :alias")
    public wallet findWalletByAlias(@Param("alias") String alias);



}

