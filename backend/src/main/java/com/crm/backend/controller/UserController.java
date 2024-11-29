package com.crm.backend.controller;


import com.crm.backend.model.User;
import com.crm.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.core.Authentication;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all-user")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @PostMapping("/add-user")
    public User addUser(@RequestBody User user) {
        return userService.saveOrUpdateUser(user);
    }

    @GetMapping("/userinfo")
    public Map<String, Object> getUserInfo(Authentication authentication) {
        // OAuth2User is the correct type after Google login
        OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();

        // Extract user information from the OAuth2User
        String email = oauth2User.getAttribute("email");
        String name = oauth2User.getAttribute("name");
        String pictureUrl = oauth2User.getAttribute("picture");

        // Check if the user already exists in the database
        User existingUser = userService.getUserByEmail(email);
        if (existingUser == null) {
            // If user doesn't exist, create a new one
            User user = new User();
            user.setEmail(email);
            user.setName(name);
            user.setPictureUrl(pictureUrl);
            user.setProvider("Google"); // You can add more providers if needed

            // Save the user to the database
            userService.saveOrUpdateUser(user);
        }

        // Return the attributes (user info)
        return oauth2User.getAttributes();
    }

    @GetMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        SecurityContextHolder.clearContext();
        request.logout(); // This will invalidate the session
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
