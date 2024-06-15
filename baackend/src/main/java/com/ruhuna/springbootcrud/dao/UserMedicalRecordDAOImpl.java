package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.MedicalRecord;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class UserMedicalRecordDAOImpl implements IUserMedicalRecordDAO{

    private EntityManager entityManager;
    @Autowired
    public UserMedicalRecordDAOImpl(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override
    public List<MedicalRecord> findAll(int id) {
        TypedQuery<MedicalRecord> query = entityManager.createQuery("SELECT m FROM MedicalRecord m WHERE m.u_ID = :id", MedicalRecord.class);
        query.setParameter("id", id);
        List<MedicalRecord> medicalRecords = query.getResultList();

        return medicalRecords;
    }
}
