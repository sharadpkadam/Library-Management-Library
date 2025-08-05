package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Book;

public interface BookDao extends JpaRepository<Book, Integer> {

	boolean existsByName(String name);

	Optional<Book> findByName(String name);

}
