package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Medicine;
import com.ruhuna.springbootcrud.service.IAdminSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Admin")
@RestController
public class AdminSettingsRestController {
    private IAdminSettingsService adminSettingsService;

    @Autowired
    public AdminSettingsRestController(IAdminSettingsService adminSettingsService){
        this.adminSettingsService=adminSettingsService;
    }

    @PutMapping("/Settings/update")
    Management updateManagement (@RequestBody Management theManagement){
        Management management=adminSettingsService.save(theManagement);
        return management;
    }
    @GetMapping("/Settings")
    List<Management> findAllManagement(){
        return adminSettingsService.findAll();
    }
}
