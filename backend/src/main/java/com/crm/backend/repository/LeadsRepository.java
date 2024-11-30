package com.crm.backend.repository;

import com.crm.backend.enums.LeadStatus;
import com.crm.backend.model.Leads;
import com.crm.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface LeadsRepository extends JpaRepository<Leads, Long> {
    List<Leads> findByStatus(LeadStatus status);

    List<Leads> findByUser(User user);
}
