package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.Medicine;
import com.ruhuna.springbootcrud.service.IAdminStocksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Admin")
@RestController
public class AdminStocksRestController {
    private IAdminStocksService adminStocksService;

    @Autowired
    public AdminStocksRestController(IAdminStocksService adminStocksService){
        this.adminStocksService=adminStocksService;
    }
    @PostMapping("/Stock/add")
    Medicine addMedicine(@RequestBody Medicine theMedicine){
        Medicine addedMedicine = adminStocksService.add(theMedicine);
        return addedMedicine;
    }

    @PutMapping("Stock/update")
    Medicine updateMedicine(@RequestBody Medicine theMedicine){
        Medicine updatedMedicine = adminStocksService.add(theMedicine);
        return updatedMedicine;
    }
    @GetMapping("/Stock")
    List<Medicine> findAllMedicine(){
        return adminStocksService.findAll();
    }

    @DeleteMapping("/Stock/{requestedId}")
    public String deletedMedicineById(@PathVariable String requestedId){
        Medicine medicine = adminStocksService.findById(requestedId);
        if(medicine != null){
            adminStocksService.deleteById(requestedId);
        }
        else {
            throw new RuntimeException("Medicine id"+ requestedId+"Not found");
        }
        return "Deleted id" + requestedId +"from the database";
    }

}
