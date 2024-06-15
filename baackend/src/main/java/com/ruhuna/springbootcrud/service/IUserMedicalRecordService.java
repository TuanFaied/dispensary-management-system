package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.MedicalRecord;

import java.util.List;

public interface IUserMedicalRecordService {

    List<MedicalRecord> findAll(int id);
}
