package info.somrat.rest.basic.auth;

import lombok.Data;

@Data
public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return String.format("AuthenticationBean [message=%s]", message);
    }

}