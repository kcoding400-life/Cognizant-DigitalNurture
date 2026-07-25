package com.JWTHandson.springjwtlearn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);
    private static final String SECRET_KEY = "mySecretKey12345"; // use stronger key in real apps

    @PostMapping("/authenticate")
    public String authenticate(HttpServletRequest request) {
        LOGGER.info("Start: authenticate() invoked");

        // Read Authorization header
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return "{\"error\":\"Missing or invalid Authorization header\"}";
        }

        // Decode Base64 credentials
        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values[1];

        LOGGER.info("Decoded credentials: username={}, password={}", username, password);

        // Simple validation (replace with DB/user service in real apps)
        if (!"user".equals(username) || !"pwd".equals(password)) {
            return "{\"error\":\"Invalid credentials\"}";
        }

        // Generate JWT
        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 600000)) // 10 minutes expiry
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes())
                .compact();

        LOGGER.info("End: authenticate() completed");
        return "{\"token\":\"" + token + "\"}";
    }
}