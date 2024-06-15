package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RegisterDAOImpl implements IRegisterDAO{
    private EntityManager entityManager;
    @Autowired
    public RegisterDAOImpl(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override
    public Patient Register(Patient patient) {
        Patient RegistedPatient  = entityManager.merge(patient);
        return RegistedPatient;
    }
}
