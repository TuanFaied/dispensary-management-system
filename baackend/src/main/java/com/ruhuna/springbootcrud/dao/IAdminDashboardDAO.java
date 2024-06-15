package com.ruhuna.springbootcrud.dao;

import java.util.List;

public interface IAdminDashboardDAO {
    int findTotalUser();
    List<Integer> findLowStock();
}
