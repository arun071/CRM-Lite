package com.crm.backend.dto;
import lombok.Data;


@Data
public class CompanyDTO {
    private Long id;
    private String name;
    private String phone;
    private String website;
    private String address;
    private String userName; // To map the associated user by ID
}
