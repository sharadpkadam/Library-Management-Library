package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.custom_exceptions.InvalidInputException;
import com.sunbeam.dao.BookDao;
import com.sunbeam.dao.CopyDao;
import com.sunbeam.dto.CopyDto;
import com.sunbeam.entities.Book;
import com.sunbeam.entities.Copy;

import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class CopyServiceImpl implements CopyService {
	private final CopyDao copyDao;
	private final ModelMapper modelMapper;
	private final BookDao bookDao;

	@Override
	public CopyDto getCopiesByBookId(String name) {
		Book book = bookDao.findByName(name).orElseThrow(() -> new InvalidInputException("Name dont exists"));
		Copy copy = copyDao.getByBook(book).orElseThrow(() -> new InvalidInputException("Name dont exists"));
		return modelMapper.map(copy, CopyDto.class);
	}
}
