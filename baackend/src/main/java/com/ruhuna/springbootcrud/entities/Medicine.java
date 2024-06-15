package com.ruhuna.springbootcrud.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "medicine")
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "m_ID")
    private int m_ID;
    @Column(name = "m_name")
    private String m_name;
    @Column(name = "unit_price")
    private int unit_price;
    @Column(name = "expire_date")
    private String expire_date;

    @Column(name="quantity")
    private int quantity;

    public Medicine() {
    }

    public Medicine(int m_ID, String m_name, int unit_price, String expire_date,int quantity) {
        this.m_ID = m_ID;
        this.m_name = m_name;
        this.unit_price = unit_price;
        this.expire_date = expire_date;
        this.quantity=quantity;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getM_ID() {
        return m_ID;
    }

    public void setM_ID(int m_ID) {
        this.m_ID = m_ID;
    }

    public String getM_name() {
        return m_name;
    }

    public void setM_name(String m_name) {
        this.m_name = m_name;
    }

    public int getUnit_price() {
        return unit_price;
    }

    public void setUnit_price(int unit_price) {
        this.unit_price = unit_price;
    }

    public String getExpire_date() {
        return expire_date;
    }

    public void setExpire_date(String expire_date) {
        this.expire_date = expire_date;
    }
}
