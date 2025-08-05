package com.sunbeam.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter@Setter
@NoArgsConstructor
@ToString
public class Book {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String author;
    private String subject;
    private double price;
    private String isbn;

    @OneToMany(mappedBy = "book")
    private List<Copy> copies;

	public Book(String name, String author, String subject, double price, String isbn, List<Copy> copies) {
		super();
		this.name = name;
		this.author = author;
		this.subject = subject;
		this.price = price;
		this.isbn = isbn;
		this.copies = copies;
	}
    
    

}
