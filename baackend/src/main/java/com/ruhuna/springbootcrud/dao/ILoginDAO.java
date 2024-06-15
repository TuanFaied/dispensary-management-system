package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Patient;

import java.util.List;

public interface ILoginDAO {
    List<String> find();
    List<Patient> findAll(String email);
}
