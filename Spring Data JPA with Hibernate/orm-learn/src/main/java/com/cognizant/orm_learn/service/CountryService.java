package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Get all countries
    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    // Get country by code
    @Transactional
    public Country getCountryByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    // Get countries by exact name
    @Transactional
    public List<Country> getCountriesByName(String name) {
        return countryRepository.findByName(name);
    }

    // Search countries by keyword in name
    @Transactional
    public List<Country> searchCountriesByKeyword(String keyword) {
        return countryRepository.findByNameContaining(keyword);
    }

    // Add or update a country
    @Transactional
    public Country saveCountry(Country country) {
        return countryRepository.save(country);
    }

    // Delete a country by code
    @Transactional
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }
}
