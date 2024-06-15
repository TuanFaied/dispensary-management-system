package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.Management;
import com.ruhuna.springbootcrud.entities.Medicine;

import java.util.List;

public interface IAdminSettingsService {
    Management save(Management management);
    List<Management> findAll();

}
