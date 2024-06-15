package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IAdminSettingsDAO;
import com.ruhuna.springbootcrud.entities.Management;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminSettingsServiceImpl implements IAdminSettingsService{

    private IAdminSettingsDAO adminSettingsDAO;
    @Autowired
    public AdminSettingsServiceImpl(IAdminSettingsDAO adminSettingsDAO){
        this.adminSettingsDAO=adminSettingsDAO;
    }
    @Override
    @Transactional
    public Management save(Management management) {
        return adminSettingsDAO.save(management);
    }

    @Override
    public List<Management> findAll() {
        return adminSettingsDAO.findAll();
    }

}
