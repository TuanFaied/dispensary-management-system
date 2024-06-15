package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.Patient;
import com.ruhuna.springbootcrud.service.IRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("//")
@RestController
public class RegisterRestController {

    private IRegisterService registerService;
    @Autowired
    public RegisterRestController(IRegisterService registerService){
        this.registerService= registerService;
    }
    @PostMapping("Register")
    Patient register(@RequestBody Patient thePatient){
        Patient registedPatien = registerService.Register(thePatient);
        return registedPatien;
    }
}
