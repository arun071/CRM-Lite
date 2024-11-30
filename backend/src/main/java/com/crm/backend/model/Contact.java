package com.crm.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
    @ManyToOne // Assuming a Company can be associated with one User
    @JoinColumn(name = "user_id", nullable = false) // Sets the foreign key column
    private User user;
}
