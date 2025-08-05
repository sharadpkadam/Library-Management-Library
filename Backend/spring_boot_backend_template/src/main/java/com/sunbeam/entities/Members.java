package com.sunbeam.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Members {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private String phone;
    private String passwd;
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "member")
    private List<Payment> payments;

    @OneToMany(mappedBy = "member")
    private List<IssueRecord> issueRecords;

	public Members(String name, String email, String phone, String passwd, List<Payment> payments,
			List<IssueRecord> issueRecords) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.passwd = passwd;
		this.payments = payments;
		this.issueRecords = issueRecords;
	}
    
    
	

}
