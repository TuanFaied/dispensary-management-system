package com.ruhuna.springbootcrud.service;

import com.ruhuna.springbootcrud.dao.IAdminDashboardDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminDashboardServiceImpl implements IAdminDashboardService {

    private IAdminDashboardDAO adminDashboardDAO;
    @Autowired
    public AdminDashboardServiceImpl(IAdminDashboardDAO adminDashboardDAO){
        this.adminDashboardDAO=adminDashboardDAO;
    }

    @Override
    public int findTotalUser() {
        return adminDashboardDAO.findTotalUser();
    }

    @Override
    public List<Integer> findLowStock() {
        return adminDashboardDAO.findLowStock();
    }
}
