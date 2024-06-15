package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.MedicalRecord;

import java.util.List;

public interface IAdminPosService {
    MedicalRecord add(MedicalRecord medicalRecord );
    List<MedicalRecord> findAll();

}
