package com.crm.backend.controller;

import com.crm.backend.dto.LeadDTO;
import com.crm.backend.service.LeadsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/leads")
public class LeadsController {

    @Autowired
    private LeadsService leadService;

    // Get all leads for a specific user
    @GetMapping("/u/{userName}")
    public List<LeadDTO> getAllLeadsByUser(@PathVariable String userName) {
        return leadService.getAllLeadsByUser(userName);
    }

    // Create a new lead
    @PostMapping
    public LeadDTO createLead(@RequestBody LeadDTO leadDTO) {
        return leadService.createLead(leadDTO);
    }

    // Update an existing lead
    @PutMapping("/{leadId}")
    public LeadDTO updateLead(@PathVariable Long leadId, @RequestBody LeadDTO leadDTO) {
        return leadService.updateLead(leadId, leadDTO);
    }

    // Delete a lead
    @DeleteMapping("/{leadId}")
    public void deleteLead(@PathVariable Long leadId) {
        leadService.deleteLead(leadId);
    }

    // Get a lead by ID
    @GetMapping("/{leadId}")
    public LeadDTO getLeadById(@PathVariable Long leadId) {
        return leadService.getLeadById(leadId);
    }
}
