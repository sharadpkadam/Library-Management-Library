package com.sunbeam.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter@Getter
@Entity
@NoArgsConstructor
@ToString
public class IssueRecord {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private LocalDateTime issued;
    private LocalDateTime returndue;
    private LocalDateTime returned;
    private double fine;

    @ManyToOne
    @JoinColumn(name = "copyid")
    private Copy copy;

    @ManyToOne
    @JoinColumn(name = "memberid")
    private Members member;

	public IssueRecord(LocalDateTime issued, LocalDateTime returndue, LocalDateTime returned, double fine, Copy copy,
			Members member) {
		super();
		this.issued = issued;
		this.returndue = returndue;
		this.returned = returned;
		this.fine = fine;
		this.copy = copy;
		this.member = member;
	}
    
    
    
}
