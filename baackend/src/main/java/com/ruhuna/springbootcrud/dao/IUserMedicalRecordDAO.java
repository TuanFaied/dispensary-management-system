package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.MedicalRecord;

import java.util.List;

public interface IUserMedicalRecordDAO {
    List<MedicalRecord> findAll(int id);
}
