package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.Medicine;

import java.util.List;

public interface IAdminStocksService {
    Medicine add(Medicine medicine);

    Medicine update(Medicine medicine);

    List<Medicine> findAll();

    void deleteById(String id);

    Medicine findById(String id);


}
