package com.crm.backend.mapper;

import com.crm.backend.dto.ContactDTO;
import com.crm.backend.model.Company;
import com.crm.backend.model.Contact;
import com.crm.backend.model.User;

public class ContactMapper {


    public static ContactDTO toDTO(Contact contact, User user, Company company) {
        ContactDTO dto = new ContactDTO();
        dto.setId(contact.getId());
        dto.setCompanyName(company.getName());
        dto.setFirstName(contact.getFirstName());
        dto.setLastName(contact.getLastName());
        dto.setEmail(contact.getEmail());
        dto.setPhone(contact.getPhone());
        dto.setCompanyId(company.getId());
        dto.setUserName(user.getUsername());
        return dto;
    }
    public static Contact toEntity(ContactDTO dto, User user, Company company) {
        Contact contact = new Contact();
        contact.setId(dto.getId());
        contact.setFirstName(dto.getFirstName());
        contact.setLastName(dto.getLastName());
        contact.setEmail(dto.getEmail());
        contact.setPhone(dto.getPhone());
        contact.setUser(user);
        contact.setCompany(company);
        return contact;
    }

}
