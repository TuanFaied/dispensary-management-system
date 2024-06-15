package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.Patient;

import java.util.List;

public interface IAdminPatientDetailsService {
    List<Patient> findAll();
}
