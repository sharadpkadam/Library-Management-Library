package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Book;

public interface BookDao extends JpaRepository<Book, Integer> {

}
