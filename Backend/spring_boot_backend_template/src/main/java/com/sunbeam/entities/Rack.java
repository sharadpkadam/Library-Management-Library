package com.sunbeam.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "racks")
@Getter
@Setter
public class Rack {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rackId;

	private String rackName;
	private String location;
	private Integer capacity;

	@OneToMany(mappedBy = "rack")
	private List<Copy> copies;
}
