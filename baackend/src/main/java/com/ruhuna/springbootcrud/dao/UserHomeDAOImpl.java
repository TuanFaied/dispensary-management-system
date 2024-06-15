package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.entities.SeatBook;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserHomeDAOImpl implements IUserHomeDAO {

    private EntityManager entityManager;
    @Autowired
    public UserHomeDAOImpl(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override
    public List<SeatBook> bookeedSeat() {
        TypedQuery<SeatBook> typedQuery =entityManager.createQuery("FROM SeatBook",SeatBook.class);
        List<SeatBook> bookedseat = typedQuery.getResultList();
        return bookedseat;
    }

    @Override
    public void reset() {
        entityManager.createNativeQuery("DELETE FROM seat_book").executeUpdate();

    }

    @Override
    public int patientWaitting() {
        TypedQuery<Long> typedQuery =entityManager.createQuery("select count(patient_waitting) from seat_book group by patient_waitting",Long.class);
        Long waittingpatient = typedQuery.getSingleResult();
        return waittingpatient.intValue();
    }

    @Override
    public int checkOut() {
        TypedQuery<Long> typedQuery =entityManager.createQuery("select count(check_out) from seat_book group by check_out",Long.class);
        Long checkOut = typedQuery.getSingleResult();
        return checkOut.intValue();
    }

    @Override
    public int status(int no, int id) {
        return   entityManager.createNativeQuery("update seat_book set patient_waitting = :no  where booked_no = :id ").setParameter("no",no).setParameter("id",id).executeUpdate();

    }



    @Override
    public int bookedNo() {
        TypedQuery<Long> typedQuery =entityManager.createQuery("select count(check_out) from seat_book group by check_out",Long.class);
        Long checkOut = typedQuery.getSingleResult();
        return checkOut.intValue();
    }

    @Override
    public SeatBook saveName(SeatBook seatBook) {
        SeatBook saveSeat = entityManager.merge(seatBook);
        return saveSeat;
    }
}
