package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.service.IAdminDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Admin")
@RestController
public class AdminDashboardRestController {
    private IAdminDashboardService adminDashboardService;
    @Autowired
    public AdminDashboardRestController(IAdminDashboardService adminDashboardService){
        this.adminDashboardService=adminDashboardService;
    }

    @GetMapping("/Dashboard")
    int TotalPatient(){
        return adminDashboardService.findTotalUser();
    }
    @GetMapping("/Loweststock")
    List<Integer> lowestStock(){
        return adminDashboardService.findLowStock();
    }



}
