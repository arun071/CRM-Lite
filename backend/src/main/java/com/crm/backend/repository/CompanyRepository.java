package com.crm.backend.repository;

import com.crm.backend.model.Company;
import com.crm.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    List<Company> findByNameContaining(String query);
    List<Company> findByUser(User user);
}
