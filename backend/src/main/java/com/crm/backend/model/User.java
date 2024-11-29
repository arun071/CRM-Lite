package com.crm.backend.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Entity
@Data  // Lombok generates getters, setters, toString, equals, hashCode, and constructors
@NoArgsConstructor  // Lombok generates a no-argument constructor
@AllArgsConstructor // Lombok generates a constructor with all fields
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String name;
    private String pictureUrl;
    private String provider;  // This could be Google, Facebook, etc.
}