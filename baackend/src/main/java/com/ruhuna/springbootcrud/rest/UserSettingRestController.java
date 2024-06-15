package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.Patient;
import com.ruhuna.springbootcrud.service.IUserSettingsSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("User")
@RestController
public class UserSettingRestController {
    private IUserSettingsSevice userSettingsSevice;
    @Autowired
    public UserSettingRestController(IUserSettingsSevice userSettingsSevice){
        this.userSettingsSevice=userSettingsSevice;
    }
    @PutMapping("/Settings/update")
    Patient updatePatient(@RequestBody Patient thePatient){
        Patient patient = userSettingsSevice.save(thePatient);
        return patient;
    }
    @GetMapping("Settings/{p_ID}")
    Patient findAllPatient(@PathVariable int p_ID){
        Patient patient = userSettingsSevice.findAll(p_ID);
        if(patient==null){
            throw new RuntimeException("Requested employee id not found");
        }
        else {

            return patient;
        }
    }
}
