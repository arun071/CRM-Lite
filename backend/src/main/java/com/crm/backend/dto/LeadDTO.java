package com.crm.backend.dto;

import com.crm.backend.enums.LeadStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.math.BigDecimal;
@Data
public class LeadDTO {
    private Long id;
    private Long contactId;
    private String contactName;
    @Enumerated(EnumType.STRING)
    private LeadStatus status;
    private String source;
    private BigDecimal estimatedValue;
    private String userName;
}
