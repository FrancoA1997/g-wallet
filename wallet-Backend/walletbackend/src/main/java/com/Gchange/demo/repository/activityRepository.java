package com.Gchange.demo.repository;

import com.Gchange.demo.entities.Activity;
import com.Gchange.demo.entities.wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface activityRepository extends JpaRepository<Activity, String> {

    @Query("SELECT a FROM Activity a WHERE a.userOnline.id = :id AND a.cvu = :walletData")
    public List<Activity> findActivityByUserId(@Param("id") String id,@Param("walletData") String walletData);

    @Query("SELECT u FROM Activity u WHERE u.userTransfered.id = :id AND u.alias = :walletData")
    public List<Activity> findActivityByUserAlias(@Param("id") String id,@Param("walletData") String walletData);
}
