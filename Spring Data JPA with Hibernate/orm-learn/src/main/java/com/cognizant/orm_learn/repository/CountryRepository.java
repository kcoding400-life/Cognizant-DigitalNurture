package com.cognizant.orm_learn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.orm_learn.model.Country;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // Custom finder methods

    // Find countries by name
    List<Country> findByName(String name);

    // Find countries where name contains a substring (case-sensitive)
    List<Country> findByNameContaining(String keyword);

    // Find countries by code prefix (e.g., "IN", "US")
    List<Country> findByCodeStartingWith(String prefix);

    // Find countries by name ignoring case
    List<Country> findByNameIgnoreCase(String name);
}

