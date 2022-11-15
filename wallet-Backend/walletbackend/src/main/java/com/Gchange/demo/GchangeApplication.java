package com.Gchange.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})

public class GchangeApplication {

	public static void main(String[] args) {
		SpringApplication.run(GchangeApplication.class, args);
	}

}
