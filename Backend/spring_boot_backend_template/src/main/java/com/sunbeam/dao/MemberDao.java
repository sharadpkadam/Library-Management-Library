package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Members;

public interface MemberDao extends JpaRepository<Members, Integer>{

}
