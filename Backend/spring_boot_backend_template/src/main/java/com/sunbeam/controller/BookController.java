package com.sunbeam.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BookDto;
import com.sunbeam.service.BookService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/book")
public class BookController {
	private final BookService bookService;
	
	@PostMapping
    public ResponseEntity<?> addBook(@RequestBody BookDto dto) {
        return ResponseEntity.ok(bookService.save(dto)) ;
    }
	
	@GetMapping
	public ResponseEntity<?> getAll()
	{
		return ResponseEntity.ofNullable(bookService.findAll());
	}
	
	@GetMapping("/{name}")
    public ResponseEntity<?> getBook(@PathVariable String name) {
        return ResponseEntity.ok(bookService.findById(name)) ;
    }
	
	
	@DeleteMapping("/{name}")
    public ResponseEntity<?> deleteBook(@PathVariable String name) {
        
        return ResponseEntity.ok(bookService.deleteById(name));
    }
}
