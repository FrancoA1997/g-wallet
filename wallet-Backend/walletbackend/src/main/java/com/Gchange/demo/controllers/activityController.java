package com.Gchange.demo.controllers;

import com.Gchange.demo.entities.Activity;
import com.Gchange.demo.repository.activityRepository;
import com.Gchange.demo.repository.customerRepository;
import com.Gchange.demo.service.impl.activitySeviceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/activity")
@CrossOrigin("*")
public class activityController {

   @Autowired
   private customerRepository userRepo;
   @Autowired
   private activityRepository activiyRepo;
    @Autowired
    private activitySeviceImpl activityService;

   /*@PostMapping("/{id}")
   public List<Activity> getActivity(@PathVariable String id){
            List<Activity> a1 = new ArrayList<>();
        a1 = activiyRepo.findActivityByUserId(id);


       return a1;
   }*/
    @PostMapping("/activityRequestSent")
    public List<Activity> getActivitySent(@RequestPart("id") String id,
                                              @RequestPart("walletData") String walletData){
        List<Activity> a1 = activiyRepo.findActivityByUserId(activityService.removeFirstandLast(id), activityService.removeFirstandLast(walletData));
        System.out.println(a1);
        return a1;

    }
    @PostMapping("/activityRequestRecived")
    public List<Activity> getActivityRecived(@RequestPart("id") String id,
                                             @RequestPart("walletData") String walletData){
        System.out.println(activityService.removeFirstandLast(id));
        System.out.println(activityService.removeFirstandLast(walletData));
        List<Activity> a1 = activiyRepo.findActivityByUserAlias(activityService.removeFirstandLast(id), activityService.removeFirstandLast(walletData));
        System.out.println(a1);
        return a1;

    }


}
