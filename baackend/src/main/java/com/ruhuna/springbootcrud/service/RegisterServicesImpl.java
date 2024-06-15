package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IRegisterDAO;
import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class RegisterServicesImpl implements IRegisterService{

    private IRegisterDAO registerDAO;

    public RegisterServicesImpl(IRegisterDAO registerDAO){
        this.registerDAO=registerDAO;
    }
    @Override
    @Transactional
    public Patient Register(Patient patient) {
        return registerDAO.Register(patient);
    }
}
