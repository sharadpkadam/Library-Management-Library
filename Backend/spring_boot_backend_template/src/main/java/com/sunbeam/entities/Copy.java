package com.sunbeam.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString

public class Copy {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int rack;
    private String status;

    @ManyToOne
    @JoinColumn(name = "bookid")
    private Book book;

    @OneToMany(mappedBy = "copy")
    private List<IssueRecord> issueRecords;

	public Copy(int rack, String status, Book book, List<IssueRecord> issueRecords) {
		super();
		this.rack = rack;
		this.status = status;
		this.book = book;
		this.issueRecords = issueRecords;
	}
    
    
}
