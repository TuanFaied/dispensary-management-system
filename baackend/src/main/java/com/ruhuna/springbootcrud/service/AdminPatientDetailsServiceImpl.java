package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IAdminPatientDetailsDAO;
import com.ruhuna.springbootcrud.entities.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminPatientDetailsServiceImpl implements IAdminPatientDetailsService {


    private IAdminPatientDetailsDAO adminPatientDetailsDAO;
    @Autowired
    public AdminPatientDetailsServiceImpl(IAdminPatientDetailsDAO adminPatientDetailsDAO){
        this.adminPatientDetailsDAO = adminPatientDetailsDAO;
    }
    @Override
    public List<Patient> findAll() {
        return adminPatientDetailsDAO.findAll();
    }
}
