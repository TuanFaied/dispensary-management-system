package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Medicine;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class AdminStocksDAOImpl implements IAdminStocksDAO {

    private EntityManager entityManager;
    @Autowired
    public AdminStocksDAOImpl(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override

    public Medicine add(Medicine medicine) {
        Medicine addMedicine =entityManager.merge(medicine);
        return addMedicine;
    }

    @Override
    public Medicine update(Medicine medicine) {
        Medicine updateMedicine =entityManager.merge(medicine);
        return updateMedicine;
    }

    @Override
    public List<Medicine> findAll() {
        TypedQuery<Medicine> typedQuery=entityManager.createQuery("from Medicine",Medicine.class);
        List<Medicine> resultSet = typedQuery.getResultList();
        return resultSet;
    }

    @Override
    public void deleteById(String id) {
        Medicine medicine = entityManager.find(Medicine.class,id);
        entityManager.remove(medicine);

    }

    @Override
    public Medicine findById(String id) {
        Medicine medicine = entityManager.find(Medicine.class,id);
        return medicine;
    }
}
