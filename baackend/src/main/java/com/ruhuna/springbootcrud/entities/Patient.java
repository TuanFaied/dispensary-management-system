package com.ruhuna.springbootcrud.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "p_ID")
    private int p_ID;
    @Column(name = "p_name")
    private String p_name;
    @Column(name = "p_email")
    private String p_email;
    @Column(name = "p_password")
    private String p_password;

    @Column(name="mobile_no")
    private String mobile_no;
    public Patient() {
    }



    public Patient(int p_ID, String p_name, String p_email, String p_password, String mobile_no) {
        this.p_ID = p_ID;
        this.p_name = p_name;
        this.p_email = p_email;
        this.p_password = p_password;
        this.mobile_no=mobile_no;

    }



    public String getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }

    public int getP_ID() {
        return p_ID;
    }

    public void setP_ID(int p_ID) {
        this.p_ID = p_ID;
    }

    public String getP_name() {
        return p_name;
    }

    public void setP_name(String p_name) {
        this.p_name = p_name;
    }

    public String getP_email() {
        return p_email;
    }

    public void setP_email(String p_email) {
        this.p_email = p_email;
    }

    public String getP_password() {
        return p_password;
    }

    public void setP_password(String p_password) {
        this.p_password = p_password;
    }
}
