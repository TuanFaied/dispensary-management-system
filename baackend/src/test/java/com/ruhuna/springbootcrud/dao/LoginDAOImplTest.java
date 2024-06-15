package com.ruhuna.springbootcrud.dao;

import com.ruhuna.springbootcrud.dao.LoginDAOImpl;
import com.ruhuna.springbootcrud.entities.Patient;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith({MockitoExtension.class, SpringExtension.class})
public class LoginDAOImplTest {

    @Mock
    private EntityManager entityManager;

    @Mock
    private TypedQuery<String> stringTypedQuery;

    @Mock
    private TypedQuery<Patient> patientTypedQuery;

    @InjectMocks
    private LoginDAOImpl loginDAOImpl;

    @BeforeEach
    public void setUp() {
        // Initialize the LoginDAOImpl with the mocked EntityManager
        loginDAOImpl = new LoginDAOImpl(entityManager);
    }

    @Test
    public void testFindManagementPasswords() {
        // Arrange
        List<String> mockPasswords = Arrays.asList("password1", "password2");
        when(entityManager.createQuery("select mg_password from Management", String.class)).thenReturn(stringTypedQuery);
        when(stringTypedQuery.getResultList()).thenReturn(mockPasswords);

        // Act
        List<String> result = loginDAOImpl.find();

        // Assert
        assertEquals(mockPasswords, result);
    }

    @Test
    public void testFindPatientsByEmail() {
        // Arrange
        String email = "test@example.com";
        Patient patient1 = new Patient();
        patient1.setP_email(email);

        List<Patient> mockPatients = Arrays.asList(patient1);

        when(entityManager.createQuery("FROM Patient where p_email= :email", Patient.class)).thenReturn(patientTypedQuery);
        when(patientTypedQuery.setParameter("email", email)).thenReturn(patientTypedQuery);
        when(patientTypedQuery.getResultList()).thenReturn(mockPatients);

        // Act
        List<Patient> result = loginDAOImpl.findAll(email);

        // Assert
        assertEquals(mockPatients, result);
        assertEquals(1, result.size());
        assertEquals(email, result.get(0).getP_email());
    }

    @Test
    public void testFindPatientsByEmailNotFound() {
        // Arrange
        String email = "unknown@example.com";

        when(entityManager.createQuery("FROM Patient where p_email= :email", Patient.class)).thenReturn(patientTypedQuery);
        when(patientTypedQuery.setParameter("email", email)).thenReturn(patientTypedQuery);
        when(patientTypedQuery.getResultList()).thenReturn(Collections.emptyList());

        // Act
        List<Patient> result = loginDAOImpl.findAll(email);

        // Assert
        assertEquals(Collections.emptyList(), result);
        assertEquals(0, result.size());
    }
}
