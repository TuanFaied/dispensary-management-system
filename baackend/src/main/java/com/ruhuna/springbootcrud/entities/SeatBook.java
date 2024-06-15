package com.ruhuna.springbootcrud.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "seat_book")
public class SeatBook {

    @Id
    @Column(name = "booked_no")
    private int booked_no;

    @Column(name = "patient_waitting",columnDefinition = "INT DEFAULT 0")
    private int patient_waitting;

    @Column(name="check_out", columnDefinition = "INT DEFAULT 0")
    private int check_out;

    @Column(name="p_name")
    private String p_name;

    public SeatBook() {
    }

    public SeatBook(int booked_no, int patient_waitting, int check_out, String p_name) {
        this.booked_no = booked_no;
        this.patient_waitting = patient_waitting;
        this.check_out = check_out;
        this.p_name = p_name;
    }

    public int getBooked_no() {
        return booked_no;
    }

    public void setBooked_no(int booked_no) {
        this.booked_no = booked_no;
    }

    public int getPatient_waitting() {
        return patient_waitting;
    }

    public void setPatient_waitting(int patient_waitting) {
        this.patient_waitting = patient_waitting;
    }

    public int getCheck_out() {
        return check_out;
    }

    public void setCheck_out(int check_out) {
        this.check_out = check_out;
    }

    public String getP_name() {
        return p_name;
    }

    public void setP_name(String p_name) {
        this.p_name = p_name;
    }
}
