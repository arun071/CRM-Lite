package com.crm.backend.service;

import com.crm.backend.model.Company;
import com.crm.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    @Autowired
    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }
    public Optional<Company> getCompany(Long id) {
        return companyRepository.findById(id);
    }
    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public List<Company> searchCompanyByName(String query) {
        return companyRepository.findByNameContaining(query);
    }
}
