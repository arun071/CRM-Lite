package com.crm.backend.service;

import com.crm.backend.model.Contact;
import com.crm.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public List<Contact> searchContacts(String query) {
        return contactRepository.findByFirstNameContainingOrLastNameContaining(query,query);
    }

    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }
    public Optional<Contact> getContact(Long id) {
        return contactRepository.findById(id);
    }
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }
}
