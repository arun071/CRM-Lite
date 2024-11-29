package com.crm.backend.repository;
import com.crm.backend.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    List<Contact> findByFirstNameContainingOrLastNameContaining(String firstName, String lastName);
//    List<Contact> findByCompany(String company);
}

