package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.SeatBook;

import java.util.List;

public interface IUserHomeDAO {
    List<SeatBook> bookeedSeat();
    void reset();
    int patientWaitting();
    int checkOut();
    int status(int no, int id);

    int bookedNo();
    SeatBook saveName(SeatBook seatBook);
}
