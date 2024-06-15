package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.MedicalRecord;

import java.util.List;

public interface IAdminPosDAO {
    MedicalRecord add(MedicalRecord medicalRecord );
    List<MedicalRecord> findAll();
}
