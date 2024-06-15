package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IUserMedicalRecordDAO;
import com.ruhuna.springbootcrud.dao.UserMedicalRecordDAOImpl;
import com.ruhuna.springbootcrud.entities.MedicalRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserMedicalRecordServiceImpl implements IUserMedicalRecordService{
    @Autowired
    private IUserMedicalRecordDAO userMedicalRecordDAO;

    public UserMedicalRecordServiceImpl(IUserMedicalRecordDAO userMedicalRecordDAO){

        this.userMedicalRecordDAO=userMedicalRecordDAO;
    }

    @Override
    public List<MedicalRecord> findAll(int id) {
        return userMedicalRecordDAO.findAll(id);
    }
}
