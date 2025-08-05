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

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Payment {
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;

	    private double amount;
	    private String type;
	    private LocalDateTime txtime;
	    private LocalDateTime duedate;

	    @ManyToOne
	    @JoinColumn(name = "memberid")
	    private Members member;

		public Payment(double amount, String type, LocalDateTime txtime, LocalDateTime duedate, Members member) {
			super();
			this.amount = amount;
			this.type = type;
			this.txtime = txtime;
			this.duedate = duedate;
			this.member = member;
		}

	    
}
