package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.MedicalRecord;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class AdminPosDAOImpl implements IAdminPosDAO{

    private EntityManager entityManager;
    @Autowired
    public AdminPosDAOImpl(EntityManager entityManager){
        this.entityManager =entityManager;
    }
    @Override

    public MedicalRecord add(MedicalRecord medicalRecord) {
        MedicalRecord savedMedicalRecord = entityManager.merge(medicalRecord);
        return savedMedicalRecord;
    }

    @Override
    public List<MedicalRecord> findAll() {
        TypedQuery<MedicalRecord> typedQuery= entityManager.createQuery("from MedicalRecord",MedicalRecord.class);
        List<MedicalRecord> resultSet = typedQuery.getResultList();
        return resultSet;
    }
}
