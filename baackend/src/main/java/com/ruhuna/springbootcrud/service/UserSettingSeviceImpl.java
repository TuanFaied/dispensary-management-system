package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IUserSettingDAO;
import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserSettingSeviceImpl implements IUserSettingsSevice {

    private IUserSettingDAO userSettingDAO;
    @Autowired
    public UserSettingSeviceImpl(IUserSettingDAO userSettingDAO){
        this.userSettingDAO=userSettingDAO;
    }

    @Override
    @Transactional
    public Patient save(Patient patient) {
        return userSettingDAO.save(patient);
    }

    @Override
    public Patient findAll(int p_ID) {
        return userSettingDAO.findAll(p_ID);
    }
}
