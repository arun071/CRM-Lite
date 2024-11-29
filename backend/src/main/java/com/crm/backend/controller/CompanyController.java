package com.crm.backend.controller;

import com.crm.backend.model.Company;
import com.crm.backend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/company")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @GetMapping("/search")
    public List<Company> searchCompanyByName(@RequestParam String query) {
        return companyService.searchCompanyByName(query);
    }

    @GetMapping
    public List<Company> getCompanies() {
        return companyService.getCompanies();
    }

    @PostMapping
    public Company createCompany(@RequestBody Company company) {
        return companyService.saveCompany(company);
    }
    @GetMapping("/id")
    public Optional<Company> getCompanyById(@RequestParam Long id) {
        return companyService.getCompany(id);
    }
}
