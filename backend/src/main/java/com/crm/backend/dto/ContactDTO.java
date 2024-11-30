package com.crm.backend.dto;

import lombok.Data;

@Data
public class ContactDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Long companyId;
    private String companyName;
    private String userName; // To map the associated user by ID
}
