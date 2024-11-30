package com.crm.backend.service;

import com.crm.backend.dto.ContactDTO;
import com.crm.backend.mapper.ContactMapper;
import com.crm.backend.model.Contact;
import com.crm.backend.model.User;
import com.crm.backend.model.Company;
import com.crm.backend.repository.ContactRepository;
import com.crm.backend.repository.UserRepository;
import com.crm.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyRepository companyRepository;

    public List<ContactDTO> getAllContactsByUser(String userName) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return contactRepository.findByUser(user).stream()
                .map(contact -> ContactMapper.toDTO(contact, user,
                        companyRepository.findById(contact.getCompany().getId())
                                .orElseThrow(() -> new RuntimeException("Company not found"))))
                .collect(Collectors.toList());
    }

    public ContactDTO createContact(ContactDTO contactDTO) {
        User user = userRepository.findByUsername(contactDTO.getUserName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Company company = companyRepository.findById(contactDTO.getCompanyId())
                .orElseThrow(() -> new RuntimeException("Company not found"));

        Contact contact = ContactMapper.toEntity(contactDTO, user, company);
        return ContactMapper.toDTO(contactRepository.save(contact), user, company);
    }

    public ContactDTO updateContact(Long contactId, ContactDTO contactDTO) {
        Contact existingContact = contactRepository.findById(contactId)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        User user = userRepository.findByUsername(contactDTO.getUserName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Company company = companyRepository.findById(contactDTO.getCompanyId())
                .orElseThrow(() -> new RuntimeException("Company not found"));

        existingContact.setFirstName(contactDTO.getFirstName());
        existingContact.setLastName(contactDTO.getLastName());
        existingContact.setEmail(contactDTO.getEmail());
        existingContact.setPhone(contactDTO.getPhone());
        existingContact.setUser(user);
        existingContact.setCompany(company);

        return ContactMapper.toDTO(contactRepository.save(existingContact), user, company);
    }

    public void deleteContact(Long contactId) {
        if (!contactRepository.existsById(contactId)) {
            throw new RuntimeException("Contact not found");
        }
        contactRepository.deleteById(contactId);
    }

    public ContactDTO getContactById(Long contactId) {
        Contact contact = contactRepository.findById(contactId)
                .orElseThrow(() -> new RuntimeException("Contact not found"));
        User user = userRepository.findById(contact.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Company company = companyRepository.findById(contact.getCompany().getId())
                .orElseThrow(() -> new RuntimeException("Company not found"));

        return ContactMapper.toDTO(contact, user, company);
    }
}
