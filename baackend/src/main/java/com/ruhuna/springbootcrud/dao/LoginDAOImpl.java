package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class LoginDAOImpl implements ILoginDAO {
    @Autowired
    private EntityManager entityManager;

    public LoginDAOImpl(EntityManager entityManager){
        this.entityManager = entityManager;
    }
    @Override
    public List<String> find() {
        TypedQuery<String> typedQuery=entityManager.createQuery("select mg_password from Management",String.class);
        List<String> resultSet = typedQuery.getResultList();
        return resultSet;
    }

    @Override
    public List<Patient> findAll(String email) {
        System.out.println("Searching for email: " + email);
        TypedQuery<Patient> query = entityManager.createQuery("FROM Patient where p_email= :email",
                Patient.class);
        query.setParameter("email", email);
        List<Patient> patients = query.getResultList();
        System.out.println("Found " + patients.size() + " patients.");

        return patients;
    }
}
