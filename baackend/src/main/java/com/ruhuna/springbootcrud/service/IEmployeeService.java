package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> findAll();
    Employee findById(int id);
    Employee save(Employee employee);
    void deleteById(int id);
}
