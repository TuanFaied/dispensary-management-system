package com.ruhuna.springbootcrud.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="medicalrecord")
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "r_ID")
    private int r_ID;
    @Column(name = "u_ID")
    private int u_ID;
  @Column(name = "r_date")
   private String r_date;
    @Column(name = "amount")
    private int amount;
    @Column(name = "medicine_name")
    private String medicine_name;
    @Column(name = "quantity")
    private int quantity;

    @Column(name="discription")
    private String discription;

    public MedicalRecord() {
    }



    public MedicalRecord(int r_ID, String r_date, int amount, String medicine_name, int quantity, int u_ID, String discription) {
        this.r_ID = r_ID;
        this.r_date = r_date;
        this.amount = amount;
        this.medicine_name = medicine_name;
        this.quantity = quantity;
        this.u_ID=u_ID;
        this.discription=discription;

    }


    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public int getR_ID() {
        return r_ID;
    }

    public void setR_ID(int r_ID) {
        this.r_ID = r_ID;
    }
    public int getU_ID() {
        return u_ID;
    }

    public void setU_ID(int u_ID) {
        this.u_ID = u_ID;
    }

    public String getR_date() {
        return r_date;
    }

    public void setR_date(String r_date) {
        this.r_date = r_date;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getMedicine_name() {
        return medicine_name;
    }

    public void setMedicine_name(String medicine_name) {
        this.medicine_name = medicine_name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
