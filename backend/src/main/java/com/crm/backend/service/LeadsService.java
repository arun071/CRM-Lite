package com.crm.backend.service;

import com.crm.backend.dto.LeadDTO;
import com.crm.backend.enums.LeadStatus;
import com.crm.backend.mapper.LeadMapper;
import com.crm.backend.model.Leads;
import com.crm.backend.model.Contact;
import com.crm.backend.model.User;
import com.crm.backend.repository.ContactRepository;
import com.crm.backend.repository.LeadsRepository;
import com.crm.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class LeadsService {

    @Autowired
    private LeadsRepository leadRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContactRepository contactRepository;

    // Get all leads for a specific user
    public List<LeadDTO> getAllLeadsByUser(String userName) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return leadRepository.findByUser(user).stream()
                .map(lead -> LeadMapper.toDTO(lead, user, contactRepository.findById(lead.getContact().getId())
                        .orElseThrow(() -> new RuntimeException("Contact not found"))))
                .collect(Collectors.toList());
    }

    // Create a new lead
    public LeadDTO createLead(LeadDTO leadDTO) {
        User user = userRepository.findByUsername(leadDTO.getUserName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Contact contact = contactRepository.findById(leadDTO.getContactId())
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        Leads lead = LeadMapper.toEntity(leadDTO, user, contact);
        return LeadMapper.toDTO(leadRepository.save(lead), user, contact);
    }

    // Update an existing lead
    public LeadDTO updateLead(Long leadId, LeadDTO leadDTO) {
        Leads existingLead = leadRepository.findById(leadId)
                .orElseThrow(() -> new RuntimeException("Lead not found"));
        User user = userRepository.findByUsername(leadDTO.getUserName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Contact contact = contactRepository.findById(leadDTO.getContactId())
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        existingLead.setStatus(leadDTO.getStatus());
        existingLead.setSource(leadDTO.getSource());
        existingLead.setEstimatedValue(leadDTO.getEstimatedValue());
        existingLead.setUser(user);
        existingLead.setContact(contact);

        return LeadMapper.toDTO(leadRepository.save(existingLead), user, contact);
    }

    // Delete a lead
    public void deleteLead(Long leadId) {
        if (!leadRepository.existsById(leadId)) {
            throw new RuntimeException("Lead not found");
        }
        leadRepository.deleteById(leadId);
    }

    // Get a lead by ID
    public LeadDTO getLeadById(Long leadId) {
        Leads lead = leadRepository.findById(leadId)
                .orElseThrow(() -> new RuntimeException("Lead not found"));
        User user = userRepository.findById(lead.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Contact contact = contactRepository.findById(lead.getContact().getId())
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        return LeadMapper.toDTO(lead, user, contact);
    }

    // Get a lead by Stages

    public Map<LeadStatus, List<LeadDTO>> getLeadsByUserAndLeadStatus(String userName) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Leads> leads = leadRepository.findByUser(user);

        Map<LeadStatus, List<LeadDTO>> leadsByStage = new HashMap<>();
        for (LeadStatus stage : LeadStatus.values()) {
            leadsByStage.put(stage, leads.stream()
                    .filter(lead -> lead.getStatus() == stage)
                    .map(lead -> LeadMapper.toDTO(lead, user, contactRepository.findById(lead.getContact().getId())
                            .orElseThrow(() -> new RuntimeException("Contact not found"))))
                    .collect(Collectors.toList()));
        }

        return leadsByStage;
    }

}
