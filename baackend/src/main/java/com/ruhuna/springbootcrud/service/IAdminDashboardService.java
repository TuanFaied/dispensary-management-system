package com.ruhuna.springbootcrud.service;

import java.util.List;

public interface IAdminDashboardService {

    int findTotalUser();

    List<Integer> findLowStock();

}
