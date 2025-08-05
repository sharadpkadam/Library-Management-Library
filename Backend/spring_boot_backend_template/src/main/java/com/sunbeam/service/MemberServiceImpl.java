package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.custom_exceptions.InvalidInputException;
import com.sunbeam.dao.MemberDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.LoginDto;
import com.sunbeam.dto.MemberDto;
import com.sunbeam.dto.SignUpDto;
import com.sunbeam.entities.Members;

import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{
	private final MemberDao memberDao;
	private final ModelMapper modelMapper;

	@Override
	public MemberDto signUp(SignUpDto dto) {
		if(memberDao.existsByEmail(dto.getEmail()))
		   throw new InvalidInputException("User already exists");
		Members user = memberDao.save(modelMapper.map(dto, Members.class ));
		return modelMapper.map(user, MemberDto.class);
	}

	@Override
	public MemberDto login(LoginDto dto) {
		Members user = memberDao.findByEmailAndPasswd(dto.getEmail(), dto.getPasswd()).orElseThrow(() -> new InvalidInputException("Invalid Email or Password"));
		return modelMapper.map(user, MemberDto.class);
	}
}
