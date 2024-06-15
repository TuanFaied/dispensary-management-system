package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Patient;

import java.util.List;

public interface IUserSettingDAO {
    Patient save(Patient patient);
    Patient findAll(int p_ID);
}
