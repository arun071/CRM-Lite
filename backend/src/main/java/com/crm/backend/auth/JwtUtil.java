package com.crm.backend.auth;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Component
public class JwtUtil {

    private final SecretKey secretKey;

    // Generate a secure key for HS256
    public JwtUtil() {
        // Generate a key of at least 256 bits
        this.secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    public String generateToken(String username) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("roles", "USER"); // add roles or any other claims as needed

        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expiryDate = now.plusHours(2); // Set expiration time

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(Date.from(now.toInstant(ZoneOffset.UTC)))
                .setExpiration(Date.from(expiryDate.toInstant(ZoneOffset.UTC)))
                .signWith(secretKey)
                .compact();
    }

//    public boolean validateToken(String token, String username) {
//        final String extractedUsername = extractUsername(token);
//        return (username.equals(extractedUsername) && !isTokenExpired(token));
//    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    private boolean isTokenExpired(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration()
                .before(new Date());
    }
    @Autowired
    private TokenBlacklistService tokenBlacklistService;

    public boolean validateToken(String token, String username) {
        return (!isTokenExpired(token) &&
                !tokenBlacklistService.isBlacklisted(token) &&
                username.equals(extractUsername(token)));
    }

}