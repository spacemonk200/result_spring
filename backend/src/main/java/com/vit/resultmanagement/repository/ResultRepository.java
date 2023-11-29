package com.vit.resultmanagement.repository;

import com.vit.resultmanagement.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<Result, Long> {
    // Additional custom queries if needed
}

