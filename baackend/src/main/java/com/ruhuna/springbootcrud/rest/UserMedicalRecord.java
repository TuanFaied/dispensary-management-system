package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.MedicalRecord;
import com.ruhuna.springbootcrud.service.IUserMedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/User")
@RestController
public class UserMedicalRecord {

    private IUserMedicalRecordService userMedicalRecordService;
    @Autowired
    public UserMedicalRecord(IUserMedicalRecordService userMedicalRecordService){
        this.userMedicalRecordService=userMedicalRecordService;
    }
    @GetMapping("records/{id}")
    List<MedicalRecord> findAll(@PathVariable int id){
        return userMedicalRecordService.findAll(id);
    }

}
