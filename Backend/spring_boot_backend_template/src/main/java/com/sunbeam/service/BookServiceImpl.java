package com.sunbeam.service;


import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.custom_exceptions.InvalidInputException;
import com.sunbeam.dao.BookDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookDto;
import com.sunbeam.entities.Book;

import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {
	private final BookDao bookDao;
	private final ModelMapper modelMapper;

	@Override
	public BookDto save(BookDto dto) {
		if(bookDao.existsByName(dto.getName()))
			throw new InvalidInputException("Book name already exists");
		Book book = bookDao.save(modelMapper.map(dto, Book.class)) ;
		return modelMapper.map(book, BookDto.class);
	}
	
	@Override
	public List<BookDto> findAll() {
        return bookDao.findAll().stream().map(book -> modelMapper.map(book, BookDto.class)).toList();
    }

	@Override
	public BookDto findById(String name) {
		Book book = bookDao.findByName(name).orElseThrow(() -> new InvalidInputException("Book name does not exists"));
		return modelMapper.map(book, BookDto.class);
	}

	@Override
	public ApiResponse deleteById(String name) {
		Book book = bookDao.findByName(name).orElseThrow(() -> new InvalidInputException("Book name does not exists"));
		bookDao.delete(book);
		return new ApiResponse("Book Deleted Successfully");
	}
}
