package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Members;
import com.sunbeam.entities.Role;

public interface MemberDao extends JpaRepository<Members, Integer>{

	boolean existsByEmail(String email);

	 Optional<Members> findByEmailAndPasswdAndRole(String email, String passwd, Role role);

}
