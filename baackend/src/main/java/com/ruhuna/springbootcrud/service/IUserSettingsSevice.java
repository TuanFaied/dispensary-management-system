package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.Patient;

import java.util.List;

public interface IUserSettingsSevice {

    Patient save(Patient patient);
    Patient findAll(int p_ID);
}
