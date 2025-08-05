package com.sunbeam.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.LoginDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.service.MemberService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/member")
public class MemberController {
	private final MemberService memberService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody SignUpDto dto)
	{
		return ResponseEntity.ok(memberService.signUp(dto));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDto dto)
	{
		return ResponseEntity.ok(memberService.login(dto));
	}
}
