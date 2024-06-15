package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.MedicalRecord;
import com.ruhuna.springbootcrud.service.IAdminPosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Admin")
@RestController
public class AdminPosRestController {
    private IAdminPosService adminPosService;
    @Autowired
    public AdminPosRestController(IAdminPosService adminPosService){
        this.adminPosService=adminPosService;
    }

    @GetMapping("/Pos")
    List<MedicalRecord> findAllRecord(){
       return adminPosService.findAll();
    }
    @PostMapping("/Pos/Add")
    MedicalRecord addRecord(@RequestBody MedicalRecord medicalRecord){
        MedicalRecord addedRecord =  adminPosService.add(medicalRecord);
        return  addedRecord;
    }

    @PutMapping("/Pos/update/")
    MedicalRecord updateRecord(@RequestBody MedicalRecord medicalRecord){
        MedicalRecord updatedRecord =  adminPosService.add(medicalRecord);
        return  updatedRecord;
    }
}
