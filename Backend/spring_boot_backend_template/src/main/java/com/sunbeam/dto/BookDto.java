package com.sunbeam.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookDto {
	
	private String name;
    private String author;
    private String subject;
    private double price;
    private String isbn;

}
