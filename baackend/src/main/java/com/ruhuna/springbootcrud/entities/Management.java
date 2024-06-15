package com.ruhuna.springbootcrud.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "menagement")
public class Management {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mg_ID")
    private String mg_ID;

    @Column(name = "mg_name")
    private String mg_name;

    @Column(name = "mg_password")
    private String mg_password;
    @Column(name = "mg_email")
    private String mg_email;

    public Management() {
    }

    public Management(String mg_ID, String mg_name, String mg_password, String mg_email) {
        this.mg_ID = mg_ID;
        this.mg_name = mg_name;
        this.mg_password = mg_password;
        this.mg_email = mg_email;
    }

    public String getMg_ID() {
        return mg_ID;
    }

    public void setMg_ID(String mg_ID) {
        this.mg_ID = mg_ID;
    }

    public String getMg_name() {
        return mg_name;
    }

    public void setMg_name(String mg_name) {
        this.mg_name = mg_name;
    }

    public String getMg_password() {
        return mg_password;
    }

    public void setMg_password(String mg_password) {
        this.mg_password = mg_password;
    }

    public String getMg_email() {
        return mg_email;
    }

    public void setMg_email(String mg_email) {
        this.mg_email = mg_email;
    }
}
