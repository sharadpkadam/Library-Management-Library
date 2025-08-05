package com.sunbeam.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dao.IssueRecordDao;
import com.sunbeam.entities.IssueRecord;
import com.sunbeam.service.IssueRecordService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/issue")
public class IssueRecordController {
	private final IssueRecordService issuedRecordService;
}
