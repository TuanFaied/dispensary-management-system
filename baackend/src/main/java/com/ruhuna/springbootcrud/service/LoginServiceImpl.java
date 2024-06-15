package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IEmployeeDAO;
import com.ruhuna.springbootcrud.dao.ILoginDAO;
import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoginServiceImpl implements ILoginService{

    private ILoginDAO loginDAO;
    @Autowired
    public LoginServiceImpl(ILoginDAO loginDAO){
        this.loginDAO=loginDAO;
    }
    @Override
    public List<String> find() {
        return loginDAO.find();
    }

    @Override
    public List<Patient> findAll(String email) {
        return loginDAO.findAll(email);
    }
}
