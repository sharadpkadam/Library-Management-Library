package com.sunbeam.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.PaymentDao;

import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService{
	private final PaymentDao paymentDao;
}
