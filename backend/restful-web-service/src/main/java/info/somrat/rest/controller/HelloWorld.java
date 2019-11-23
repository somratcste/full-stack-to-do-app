package info.somrat.rest.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorld {

    @GetMapping("/hello-world")
    public ResponseEntity<?> helloWorld() throws JSONException {
//        throw new RuntimeException("Errors ! Please check");
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("message", "hello world");
        return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
    }
}
