package com.ruhuna.springbootcrud.rest;

import com.ruhuna.springbootcrud.entities.SeatBook;
import com.ruhuna.springbootcrud.service.IUserHomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("User")
@RestController
public class UserhomeRestController {
    private IUserHomeService userHomeService;
    @Autowired
    public UserhomeRestController(IUserHomeService userHomeService){
        this.userHomeService=userHomeService;
    }

    @GetMapping("/Home")
    List<SeatBook> findAll(){
        return userHomeService.bookeedSeat();
    }

    @PostMapping("/home")
    SeatBook bookSeat(@RequestBody SeatBook theSeat){
        SeatBook saved = userHomeService.saveName(theSeat);
        return saved;
    }

    @DeleteMapping("/delete")
    void deleteData(){
        userHomeService.reset();
    }

    @PostMapping("/status/{no}/{id}")
    int status(@PathVariable int no,@PathVariable int id){
       return userHomeService.status(no,id);
    }


}
