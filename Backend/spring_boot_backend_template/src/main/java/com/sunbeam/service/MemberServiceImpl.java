package com.sunbeam.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.MemberDao;


import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{
	private final MemberDao memberDao;
}
