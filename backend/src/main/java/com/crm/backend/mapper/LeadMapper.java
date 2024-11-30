package com.crm.backend.mapper;

import com.crm.backend.dto.LeadDTO;
import com.crm.backend.model.Leads;
import com.crm.backend.model.User;
import com.crm.backend.model.Contact;

public class LeadMapper {

    // Convert Lead entity to LeadDTO
    public static LeadDTO toDTO(Leads lead, User user, Contact contact) {
        LeadDTO dto = new LeadDTO();
        dto.setId(lead.getId());
        dto.setContactName(contact.getFirstName() + " " + contact.getLastName());
        dto.setContactId(contact.getId());
        dto.setStatus(lead.getStatus());
        dto.setSource(lead.getSource());
        dto.setEstimatedValue(lead.getEstimatedValue());
        dto.setUserName(user.getUsername());
        return dto;
    }

    // Convert LeadDTO to Lead entity
    public static Leads toEntity(LeadDTO leadDTO, User user, Contact contact) {
        Leads lead = new Leads();
        lead.setStatus(leadDTO.getStatus());
        lead.setSource(leadDTO.getSource());
        lead.setEstimatedValue(leadDTO.getEstimatedValue());
        lead.setUser(user);
        lead.setContact(contact);
        return lead;
    }
}
