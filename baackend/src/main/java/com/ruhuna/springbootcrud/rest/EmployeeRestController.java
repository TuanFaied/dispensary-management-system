package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.dao.EmpoyeeDAOImpl;
import com.ruhuna.springbootcrud.entities.Employee;
import com.ruhuna.springbootcrud.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api")
@RestController
public class EmployeeRestController {
    private IEmployeeService employeeService;

    @Autowired
    //Constructor Based DI
    public EmployeeRestController(IEmployeeService employeeService){
        this.employeeService= employeeService;
    }
    //localhost:8080/api/employees
    @GetMapping("/employees")
    List<Employee> findAllEmployees(){
        //return employeeDAO.findAll();
        return employeeService.findAll();
    }

    @GetMapping("employees/{requestedId}")
    Employee findEmployeeById(@PathVariable int requestedId){
       // return employeeDAO.findById(requestedId);
        //if this id is not in the database this employee object will be null
       Employee employee = employeeService.findById(requestedId);
       if(employee==null){
           throw new RuntimeException("Requested employee id not found");
       }
       else {

           return employee;
       }
    }
    @PostMapping("/employee")
    Employee addEmployee(@RequestBody Employee theEmployee){
        Employee savedEmployee = employeeService.save(theEmployee);

        return savedEmployee;

    }
    @PutMapping("/employees")
    Employee updateEmployee(@RequestBody Employee theEmployee){
        //if its there it will update the existing one
        //if its not there it will create a new record in the databassse
        Employee employee = employeeService.save(theEmployee);
        return  employee;
    }

    @DeleteMapping("/employee/{requestedId}")
    public String deletedEmployeeById(@PathVariable int requestedId){
        Employee employee = employeeService.findById(requestedId);
        if(employee != null){
            employeeService.deleteById(requestedId);
        }
        else {
            throw new RuntimeException("Employee id: "+ requestedId +" NOt Found");
        }
        return "Deleted id" + requestedId +"from the database";
    }
}
