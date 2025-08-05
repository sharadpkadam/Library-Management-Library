package com.sunbeam.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.IssueRecordDao;

import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class IssueRecordServiceImpl implements IssueRecordService {
	private final IssueRecordDao issueRecordDao;
}
