package com.javalanguagezone.interviewtwitter.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.*;
import static java.util.Collections.singletonList;
import javax.persistence.*;
import static javax.persistence.GenerationType.IDENTITY;
import lombok.*;
import static lombok.AccessLevel.PRIVATE;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = PRIVATE)
@ToString(exclude = {"following", "followers"})
@EqualsAndHashCode(exclude = {"following", "followers"})
public class User implements UserDetails {

    public static final List<SimpleGrantedAuthority> AUTHORITIES = singletonList(new SimpleGrantedAuthority("USER"));

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    @JsonIgnore
    @ManyToMany
    private Set<User> following = new HashSet<>();

    @JsonIgnore
    @ManyToMany(mappedBy = "following")
    private Set<User> followers = new HashSet<>();

    @JsonIgnore
    private String password;

    @JsonIgnore
    private String fullName;

    public User(String fullName, String username, String password) {
        this.fullName = fullName;
        this.username = username;
        this.password = password;
    }

    public void addFollowing(User... users) {
        following.addAll(Arrays.asList(users));
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return AUTHORITIES;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
