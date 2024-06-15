package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Patient;

import java.util.List;

public interface IAdminPatientDetailsDAO {
    List<Patient> findAll();
}
