package com.cognizant.spring_learn2.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")
    public String sayHello() {
        LOGGER.info("Start: sayHello() method invoked");
        String message = "Hello World!!";
        LOGGER.info("End: sayHello() method completed");
        return message;
    }
}
