package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Management;

import java.util.List;

public interface IAdminSettingsDAO {
    Management save(Management management);
    List<Management> findAll();
}
