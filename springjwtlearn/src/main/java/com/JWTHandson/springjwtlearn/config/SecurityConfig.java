package com.JWTHandson.springjwtlearn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // disable CSRF
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/authenticate").permitAll() // allow /authenticate without token
                        .anyRequest().authenticated()                 // all other endpoints require authentication
                );
        return http.build();
    }
}
