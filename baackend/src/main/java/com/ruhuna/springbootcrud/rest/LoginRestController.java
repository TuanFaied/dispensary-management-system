package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Patient;
import com.ruhuna.springbootcrud.service.ILoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("//")
@RestController
public class LoginRestController {
    @Autowired
    private ILoginService loginService;
    public LoginRestController(ILoginService loginService){
        this.loginService=loginService;
    }

    @GetMapping("Admin")
    List<String> find(){
        return loginService.find();
    }
    @GetMapping("User/{email}")
    List<Patient> findAll(@PathVariable String email ){
        return loginService.findAll(email);
    }

}
