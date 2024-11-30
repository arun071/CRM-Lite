package com.crm.backend.model;
import com.crm.backend.enums.LeadStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Leads {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "contact_id")
    private Contact contact;
    @ManyToOne // Assuming a Company can be associated with one User
    @JoinColumn(name = "user_id", nullable = false) // Sets the foreign key column
    private User user;
    @Enumerated(EnumType.STRING)
    private LeadStatus status;
    private String source;
    private BigDecimal estimatedValue;
}


