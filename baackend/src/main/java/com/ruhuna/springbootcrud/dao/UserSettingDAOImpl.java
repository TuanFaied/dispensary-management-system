package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
@Repository
public class UserSettingDAOImpl implements IUserSettingDAO{

    private EntityManager entityManager;
    @Autowired
    public UserSettingDAOImpl(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override
    public Patient save(Patient patient) {
        Patient savedPatient = entityManager.merge((patient));
        return savedPatient;
    }

    @Override
    public Patient findAll(int p_ID) {
        Patient typedQuery=entityManager.find(Patient.class,p_ID);
        return typedQuery;

    }
}
