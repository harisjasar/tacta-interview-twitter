package com.javalanguagezone.interviewtwitter.service;

import com.javalanguagezone.interviewtwitter.repository.UserRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Test(expected = UsernameNotFoundException.class)
    public void loadingUserWithUnknownUsername_UsernameNotFoundExceptionThrown() {
        userService.loadUserByUsername("unknownUser");
    }

    @Test
    public void getUserFullName_assertExists() {
        String fullName = userRepository.findOneByUsername("satoshiNakamoto").getFullName();
        Assert.assertEquals("Satoshi Nakamoto", fullName);

    }
}
