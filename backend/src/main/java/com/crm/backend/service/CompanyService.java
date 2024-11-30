package com.crm.backend.service;

import com.crm.backend.dto.CompanyDTO;
import com.crm.backend.mapper.CompanyMapper;
import com.crm.backend.model.Company;
import com.crm.backend.model.User;
import com.crm.backend.repository.CompanyRepository;
import com.crm.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private UserRepository userRepository;

    public List<CompanyDTO> getAllCompanies(String userName) {
        User user = userRepository.findByUsername(userName)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Company> companies = companyRepository.findByUser(user);
        return companies.stream().map(CompanyMapper::toDTO).collect(Collectors.toList());
    }

    public CompanyDTO createCompany(CompanyDTO dto) {
        User user = userRepository.findByUsername(dto.getUserName())
                .orElseThrow(() -> new RuntimeException("User not found")); // Exception handling
        Company company = CompanyMapper.toEntity(dto, user);
        return CompanyMapper.toDTO(companyRepository.save(company));
    }

    public CompanyDTO getCompanyById(Long id) {
        Company company = companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));
        return CompanyMapper.toDTO(company);
    }

    public CompanyDTO updateCompany(Long id, CompanyDTO dto) {
        Company company = companyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        User user = userRepository.findByUsername(dto.getUserName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        company.setName(dto.getName());
        company.setPhone(dto.getPhone());
        company.setWebsite(dto.getWebsite());
        company.setAddress(dto.getAddress());
        company.setUser(user);

        Company updatedCompany = companyRepository.save(company);
        return CompanyMapper.toDTO(updatedCompany);
    }

    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }
}
