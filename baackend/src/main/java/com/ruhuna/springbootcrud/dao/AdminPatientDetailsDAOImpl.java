package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class AdminPatientDetailsDAOImpl implements IAdminPatientDetailsDAO{
    private EntityManager entityManager;
    @Autowired
    public AdminPatientDetailsDAOImpl(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override
    public List<Patient> findAll() {
        TypedQuery<Patient> typedQuery =entityManager.createQuery("from Patient",Patient.class);
        List<Patient> resultSet = typedQuery.getResultList();
        return resultSet;
    }
}
