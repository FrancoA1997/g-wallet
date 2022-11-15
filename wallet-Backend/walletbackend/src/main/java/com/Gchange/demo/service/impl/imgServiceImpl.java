package com.Gchange.demo.service.impl;

import com.Gchange.demo.entities.img;
import com.Gchange.demo.repository.imgRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

    @Service
    public class imgServiceImpl {

        @Autowired
        private imgRepository imgRepo;

        @Transactional
        public img multiPartToEntity(MultipartFile file) throws Exception {
            if(file != null) {
                img img1 = new img(
                        file.getOriginalFilename(),
                        file.getContentType(),
                        file.getBytes()
                );
                return imgRepo.save(img1);
            } else {
                throw new Exception("Current image couldn't be uploaded");
            }

        }

}

