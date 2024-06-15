package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Patient;

import java.util.List;

public interface ILoginService {

    List<String> find();
    List<Patient> findAll(String email);


}
