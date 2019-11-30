package info.somrat.rest.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

    static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

    static {
        inMemoryUserList.add(new JwtUserDetails(1L, "nazmul",
                "$2a$10$hvNwa.tOR9xEB9rdidWsLeALOlAC41B2RnQA.kzrql/ZIAuHbRVhW", "ROLE_USER_2"));
        inMemoryUserList.add(new JwtUserDetails(2L, "hossain",
                "$2a$10$hvNwa.tOR9xEB9rdidWsLeALOlAC41B2RnQA.kzrql/ZIAuHbRVhW", "ROLE_USER_2"));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
                .filter(user -> user.getUsername().equals(username)).findFirst();

        if (!findFirst.isPresent()) {
            throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
        }

        return findFirst.get();
    }

}