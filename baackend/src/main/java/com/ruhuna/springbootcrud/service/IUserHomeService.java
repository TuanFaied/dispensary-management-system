package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.entities.SeatBook;

import java.util.List;

public interface IUserHomeService {
    List<SeatBook> bookeedSeat();

    SeatBook saveName(SeatBook seatBook);

    void reset();

    int status(int no, int id);
    int patientWaitting();
    int checkOut();

    int bookedNo();
}
