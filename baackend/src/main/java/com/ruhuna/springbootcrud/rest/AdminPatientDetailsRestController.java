package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.Patient;
import com.ruhuna.springbootcrud.service.IAdminPatientDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Admin")
@RestController
public class AdminPatientDetailsRestController {

    private IAdminPatientDetailsService adminPatientDetailsService;
    @Autowired
    public AdminPatientDetailsRestController(IAdminPatientDetailsService adminPatientDetailsService){
        this.adminPatientDetailsService = adminPatientDetailsService;
    }

    @GetMapping("/PatientDetails")
    List<Patient> findAllPatient(){
        return adminPatientDetailsService.findAll();
    }


}
