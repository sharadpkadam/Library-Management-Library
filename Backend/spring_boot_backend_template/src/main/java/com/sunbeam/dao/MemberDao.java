package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Members;

public interface MemberDao extends JpaRepository<Members, Integer>{

	boolean existsByEmail(String email);

	Optional<Members> findByEmailAndPasswd(String email, String passwd);

}
