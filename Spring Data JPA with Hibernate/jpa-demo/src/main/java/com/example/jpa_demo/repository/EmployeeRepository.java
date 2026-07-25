package com.example.jpa_demo.repository;

import com.example.jpa_demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // Custom query methods (Spring Data JPA will generate SQL automatically)

    // Find employees by exact name
    List<Employee> findByName(String name);

    // Find employees whose name contains a keyword
    List<Employee> findByNameContaining(String keyword);

    // Find employees with salary greater than a given value
    List<Employee> findBySalaryGreaterThan(Double salary);

    // Find employees with salary less than a given value
    List<Employee> findBySalaryLessThan(Double salary);
}
