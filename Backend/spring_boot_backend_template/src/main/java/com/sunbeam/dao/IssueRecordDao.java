package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.IssueRecord;

public interface IssueRecordDao extends JpaRepository<IssueRecord, Integer> {

}
