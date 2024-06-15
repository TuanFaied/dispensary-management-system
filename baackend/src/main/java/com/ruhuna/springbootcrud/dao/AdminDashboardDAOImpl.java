package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AdminDashboardDAOImpl implements IAdminDashboardDAO{
    private EntityManager entityManager;

    @Autowired
    public AdminDashboardDAOImpl(EntityManager entityManager){
        this.entityManager= entityManager;
    }

    @Override
    public int findTotalUser() {
        TypedQuery<Long> typedQuery = entityManager.createQuery("SELECT COUNT(p) FROM Patient p", Long.class);
        Long totalUser = typedQuery.getSingleResult(); // Use getSingleResult() to get the result as a Long
        return totalUser.intValue(); // Convert Long to int
    }

    @Override
    public List<Integer> findLowStock() {
        TypedQuery<Integer> typedQuery = entityManager.createQuery("select quantity from medicine order by quantity ASC",Integer.class);
        List<Integer> lowestMedicine = typedQuery.getResultList();
        return lowestMedicine;
    }
}
