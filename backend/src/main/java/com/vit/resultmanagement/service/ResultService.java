package com.vit.resultmanagement.service;

import com.vit.resultmanagement.model.Result;

import java.util.List;

public interface ResultService {
    List<Result> getAllResults();
    Result getResultById(Long id);
    Result saveResult(Result result);
    void deleteResult(Long id);
}
