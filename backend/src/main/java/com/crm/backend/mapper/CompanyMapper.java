package com.crm.backend.mapper;

import com.crm.backend.dto.CompanyDTO;
import com.crm.backend.model.Company;
import com.crm.backend.model.User;

public class CompanyMapper {

    public static CompanyDTO toDTO(Company company) {
        CompanyDTO dto = new CompanyDTO();
        dto.setId(company.getId());
        dto.setName(company.getName());
        dto.setPhone(company.getPhone());
        dto.setWebsite(company.getWebsite());
        dto.setAddress(company.getAddress());
        dto.setUserName(company.getUser().getUsername()); // Map user ID
        return dto;
    }

    public static Company toEntity(CompanyDTO dto, User user) {
        Company company = new Company();
        company.setId(dto.getId());
        company.setName(dto.getName());
        company.setPhone(dto.getPhone());
        company.setWebsite(dto.getWebsite());
        company.setAddress(dto.getAddress());
        company.setUser(user); // Map the user entity
        return company;
    }
}
