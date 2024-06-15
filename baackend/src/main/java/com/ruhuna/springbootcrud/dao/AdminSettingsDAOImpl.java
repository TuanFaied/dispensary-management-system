package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Medicine;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AdminSettingsDAOImpl implements IAdminSettingsDAO {

    private EntityManager entityManager;
    @Autowired
    public AdminSettingsDAOImpl(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override
    public Management save(Management management) {
        Management savedManagement = entityManager.merge(management);
        return savedManagement;
    }

    @Override
    public List<Management> findAll() {
        TypedQuery<Management> typedQuery=entityManager.createQuery("from Management",Management.class);
        List<Management> resultSet = typedQuery.getResultList();
        return resultSet;
    }
}
