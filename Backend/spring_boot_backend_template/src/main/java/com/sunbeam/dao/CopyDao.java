package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Book;
import com.sunbeam.entities.Copy;

public interface CopyDao extends JpaRepository<Copy, Integer> {

	Optional<Copy> getByBook(Book book);

}
