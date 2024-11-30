package com.crm.backend.controller;

import com.crm.backend.dto.ContactDTO;
import com.crm.backend.service.ContactService;
import com.crm.backend.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<ContactDTO> createContact(@RequestBody ContactDTO contactDTO) {
        ContactDTO createdContact = contactService.createContact(contactDTO);
        return ResponseEntity.ok(createdContact);
    }

    @PutMapping("/{contactId}")
    public ResponseEntity<ContactDTO> updateContact(@PathVariable Long contactId, @RequestBody ContactDTO contactDTO) {
        ContactDTO updatedContact = contactService.updateContact(contactId, contactDTO);
        return ResponseEntity.ok(updatedContact);
    }

    @DeleteMapping("/{contactId}")
    public ResponseEntity<Void> deleteContact(@PathVariable Long contactId) {
        contactService.deleteContact(contactId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/u/{userName}")
    public List<ContactDTO> getAllContactsByUser(@PathVariable String userName) {
        return contactService.getAllContactsByUser(userName);
    }
    @GetMapping("/{contactId}")
    public ResponseEntity<ContactDTO> getContactById(@PathVariable Long contactId) {
        ContactDTO contactDTO = contactService.getContactById(contactId);
        return ResponseEntity.ok(contactDTO);
    }
}
