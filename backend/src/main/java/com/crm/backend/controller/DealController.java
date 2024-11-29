package com.crm.backend.controller;

import com.crm.backend.model.Deal;
import com.crm.backend.repository.DealRepository;
import com.crm.backend.service.DealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/deals")
public class DealController {
    @Autowired
    private DealRepository dealRepository;
    @Autowired
    private DealService dealService;

    @PostMapping
    public Deal createDeal(@RequestBody Deal deal) {
        return dealRepository.save(deal);
    }

    @GetMapping
    public List<Deal> getAllDeals() {
        return dealRepository.findAll();
    }

    @GetMapping("/report/stages")
    public Map<String, Long> getDealCountsByStage() {
        return dealService.getDealsCountByStage();
    }

}
