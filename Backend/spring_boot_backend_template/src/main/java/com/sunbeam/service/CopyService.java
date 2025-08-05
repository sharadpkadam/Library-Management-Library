package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.CopyDto;
import com.sunbeam.entities.Copy;

public interface CopyService {
	CopyDto getCopiesByBookId(String name);
}
