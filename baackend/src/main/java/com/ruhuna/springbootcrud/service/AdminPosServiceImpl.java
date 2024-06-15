package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IAdminPosDAO;
import com.ruhuna.springbootcrud.entities.MedicalRecord;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminPosServiceImpl implements IAdminPosService {


    private IAdminPosDAO adminPosDAO;
    @Autowired
    public AdminPosServiceImpl(IAdminPosDAO adminPosDAO){
        this.adminPosDAO = adminPosDAO;
    }
    @Override
    @Transactional
    public MedicalRecord add(MedicalRecord medicalRecord) {
        return adminPosDAO.add(medicalRecord);
    }

    @Override
    public List<MedicalRecord> findAll() {
        return adminPosDAO.findAll();
    }
}
