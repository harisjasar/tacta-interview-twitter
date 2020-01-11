package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.service.UserService;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import java.security.Principal;
import java.util.Collection;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/numFollowers")
    public int numFollowers(Principal principal) {
        return userService.getNumUsersFollowers(principal);
    }

    @GetMapping("/numFollowing")
    public int numFollowing(Principal principal) {
        return userService.getNumUsersFollowing(principal);
    }

    @GetMapping("/followers")
    public Collection<UserDTO> followers(Principal principal) {
        return userService.getUsersFollowers(principal);
    }

    @GetMapping("/following")
    public Collection<UserDTO> following(Principal principal) {
        return userService.getUsersFollowing(principal);
    }

    @GetMapping("/fullName")
    public String fullName(Principal principal) {
        return userService.getUserFullName(principal.getName());
    }

}
