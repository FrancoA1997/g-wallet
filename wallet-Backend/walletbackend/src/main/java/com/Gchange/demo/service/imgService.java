package com.Gchange.demo.service;

import com.Gchange.demo.entities.img;
import com.Gchange.demo.exception.errorMsg;
import com.Gchange.demo.repository.imgRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
@Service
public class imgService {
    @Autowired
    private imgRepository imgRepo;

    @Transactional
    public img multiPartToEntity(MultipartFile file) throws errorMsg {

        if(file != null) {
            img img = new img();
            img.setMime(file.getContentType());
            img.setName(file.getName());
            try {
                img.setContent(file.getBytes());
            } catch (IOException ex) {
                Logger.getLogger(imgService.class.getName()).log(Level.SEVERE, null, ex);
            }
            return imgRepo.save(img);
        } else {
            throw new errorMsg("No se puede cargar la foto");
        }

    }
}
