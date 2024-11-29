package com.crm.backend.controller;

import com.crm.backend.enums.LeadStatus;
import com.crm.backend.model.Leads;
import com.crm.backend.repository.LeadsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/leads")
public class LeadsController {
    @Autowired
    private LeadsRepository leadRepository;

    @GetMapping
    public List<Leads> getAllLeads() {
        return leadRepository.findAll();
    }

    @PostMapping
    public Leads createLead(@RequestBody Leads lead) {
        return leadRepository.save(lead);
    }

    @GetMapping("/status/{status}")
    public List<Leads> getLeadsByStatus(@PathVariable LeadStatus status) {
        return leadRepository.findByStatus(status);
    }
}
