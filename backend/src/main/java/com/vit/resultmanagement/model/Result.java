package com.vit.resultmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String studentName;
    private String subject1;
    private double mseMarks1;
    private double eseMarks1;
    private String subject2;
    private double mseMarks2;
    private double eseMarks2;
    private String subject3;
    private double mseMarks3;
    private double eseMarks3;
    private String subject4;
    private double mseMarks4;
    private double eseMarks4;

    // Getters
    public Long getId() {
        return id;
    }

    public String getStudentName() {
        return studentName;
    }

    public String getSubject1() {
        return subject1;
    }

    public double getMseMarks1() {
        return mseMarks1;
    }

    public double getEseMarks1() {
        return eseMarks1;
    }

    public String getSubject2() {
        return subject2;
    }

    public double getMseMarks2() {
        return mseMarks2;
    }

    public double getEseMarks2() {
        return eseMarks2;
    }

    public String getSubject3() {
        return subject3;
    }

    public double getMseMarks3() {
        return mseMarks3;
    }

    public double getEseMarks3() {
        return eseMarks3;
    }

    public String getSubject4() {
        return subject4;
    }

    public double getMseMarks4() {
        return mseMarks4;
    }

    public double getEseMarks4() {
        return eseMarks4;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public void setSubject1(String subject1) {
        this.subject1 = subject1;
    }

    public void setMseMarks1(double mseMarks1) {
        this.mseMarks1 = mseMarks1;
    }

    public void setEseMarks1(double eseMarks1) {
        this.eseMarks1 = eseMarks1;
    }

    public void setSubject2(String subject2) {
        this.subject2 = subject2;
    }

    public void setMseMarks2(double mseMarks2) {
        this.mseMarks2 = mseMarks2;
    }

    public void setEseMarks2(double eseMarks2) {
        this.eseMarks2 = eseMarks2;
    }

    public void setSubject3(String subject3) {
        this.subject3 = subject3;
    }

    public void setMseMarks3(double mseMarks3) {
        this.mseMarks3 = mseMarks3;
    }

    public void setEseMarks3(double eseMarks3) {
        this.eseMarks3 = eseMarks3;
    }

    public void setSubject4(String subject4) {
        this.subject4 = subject4;
    }

    public void setMseMarks4(double mseMarks4) {
        this.mseMarks4 = mseMarks4;
    }

    public void setEseMarks4(double eseMarks4) {
        this.eseMarks4 = eseMarks4;
    }
    public double calculateFinalResult() {
        double totalMarks1 = (mseMarks1 * 0.3) + (eseMarks1 * 0.7);
        double totalMarks2 = (mseMarks2 * 0.3) + (eseMarks2 * 0.7);
        double totalMarks3 = (mseMarks3 * 0.3) + (eseMarks3 * 0.7);
        double totalMarks4 = (mseMarks4 * 0.3) + (eseMarks4 * 0.7);

        // Calculate the average of the total marks for four subjects
        double averageTotalMarks = (totalMarks1 + totalMarks2 + totalMarks3 + totalMarks4) / 4.0;

        return averageTotalMarks;
    }
}