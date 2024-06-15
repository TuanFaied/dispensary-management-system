package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IUserHomeDAO;
import com.ruhuna.springbootcrud.entities.SeatBook;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserHomeServiceImpl implements IUserHomeService
{
    private IUserHomeDAO userHomeDAO;
    @Autowired
    public UserHomeServiceImpl(IUserHomeDAO userHomeDAO){
        this.userHomeDAO=userHomeDAO;
    }
    @Override
    public List<SeatBook> bookeedSeat() {
        return userHomeDAO.bookeedSeat();
    }

    @Override
    @Transactional
    public SeatBook saveName(SeatBook seatBook) {
        return userHomeDAO.saveName(seatBook);
    }

    @Modifying
    @Transactional
    public void reset() {
        userHomeDAO.reset();
    }

    @Override
    @Transactional
    public int status(int no , int id) {
        return userHomeDAO.status(no,id);
    }


    @Override
    public int patientWaitting() {
        return 0;
    }

    @Override
    public int checkOut() {
        return 0;
    }

    @Override
    public int bookedNo() {
        return 0;
    }
}
