package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.Employee;

import java.util.List;

//hinding implementation details by interfaces
//interface is a way to achive abstraction
public interface IEmployeeDAO {
    List<Employee> findAll();
    Employee findById(int id);
    Employee save(Employee employee);
    void deleteById(int id);
}
