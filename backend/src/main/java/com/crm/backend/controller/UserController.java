package com.crm.backend.controller;


import com.crm.backend.auth.AuthRequest;
import com.crm.backend.auth.AuthResponse;
import com.crm.backend.auth.JwtUtil;
import com.crm.backend.auth.TokenBlacklistService;
import com.crm.backend.model.User;
import com.crm.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;


    @Autowired
    private JwtUtil jwtUtil;  // Inject JwtUtil

    @Autowired
    private TokenBlacklistService tokenBlacklistService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        userService.signup(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        // Logic to authenticate the user
        userService.authenticate(authRequest.getUsername(), authRequest.getPassword());

        // Generate JWT token
        String token = jwtUtil.generateToken(authRequest.getUsername());

        // Return token wrapped in AuthResponse
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @DeleteMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String token) {
        // Remove the "Bearer " prefix
        String jwtToken = token.substring(7);
        tokenBlacklistService.addToBlacklist(jwtToken);
        return ResponseEntity.ok("User logged out successfully");
    }
}