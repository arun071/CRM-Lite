package com.crm.backend.repository;

import com.crm.backend.model.Deal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DealRepository extends JpaRepository<Deal, Long> {
    @Query("SELECT d.stage, COUNT(d) FROM Deal d GROUP BY d.stage")
    List<Object[]> getDealsCountByStage();
}
