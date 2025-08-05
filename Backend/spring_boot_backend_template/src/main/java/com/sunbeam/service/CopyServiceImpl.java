package com.sunbeam.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.BookDao;

import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class CopyServiceImpl implements CopyService {
	private final BookDao bookDao;
}
