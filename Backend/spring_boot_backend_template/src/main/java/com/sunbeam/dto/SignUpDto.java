package com.sunbeam.dto;

import com.sunbeam.entities.Role;

import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDto {
	
	private String name;
    private String email;
    private String phone;
    private String passwd;
    @Transient
    private Role role = Role.LIBRARIAN;

}
