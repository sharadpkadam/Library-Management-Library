package com.sunbeam.service;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookDto;

public interface BookService {

	BookDto save(BookDto dto);
	
	List<BookDto> findAll();

	BookDto findById(String name);

	ApiResponse deleteById(String name);
	
}
