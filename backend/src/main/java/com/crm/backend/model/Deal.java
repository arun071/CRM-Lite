package com.crm.backend.model;
import com.crm.backend.enums.DealStage;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Deal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "contact_id")
    private Contact contact;

    @Enumerated(EnumType.STRING)
    private DealStage stage; // Enum: PROSPECTING, NEGOTIATION, CLOSED_WON, CLOSED_LOST

    private BigDecimal amount;
    private LocalDate closeDate;
}


