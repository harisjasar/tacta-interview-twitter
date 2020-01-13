package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.service.UserService;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import java.security.Principal;
import java.util.Collection;
import static org.springframework.http.HttpStatus.CREATED;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
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

    @PostMapping("/adduser")
    @ResponseStatus(CREATED)
    public UserDTO newUser(@RequestBody User newUser) {
        return userService.addUserToRepo(newUser);
    }
}
