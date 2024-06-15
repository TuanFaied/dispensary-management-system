package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IAdminStocksDAO;
import com.ruhuna.springbootcrud.entities.Medicine;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminStocksServiceImpl implements IAdminStocksService {

    private IAdminStocksDAO adminStocksDAO;
    @Autowired
    public AdminStocksServiceImpl(IAdminStocksDAO adminStocksDAO){
        this.adminStocksDAO =adminStocksDAO;
    }
    @Override
    @Transactional
    public Medicine add(Medicine medicine) {
        return adminStocksDAO.add(medicine);
    }

    @Override
    public Medicine update(Medicine medicine) {
        return adminStocksDAO.update(medicine);
    }

    @Override
    public List<Medicine> findAll()
    {
        return adminStocksDAO.findAll();
    }

    @Override
    @Transactional
    public void deleteById(String id) {
        adminStocksDAO.deleteById(id);

    }

    @Override
    public Medicine findById(String id) {
        return adminStocksDAO.findById(id);
    }
}
