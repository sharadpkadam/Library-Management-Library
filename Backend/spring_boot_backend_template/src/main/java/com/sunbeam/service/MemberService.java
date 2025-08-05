package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.LoginDto;
import com.sunbeam.dto.MemberDto;
import com.sunbeam.dto.SignUpDto;


public interface MemberService {

	MemberDto signUp(SignUpDto dto);

	MemberDto login(LoginDto dto);

}
