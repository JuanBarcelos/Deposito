package com.juanbarcelos.doisirmaos.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.juanbarcelos.doisirmaos.dto.OrderDTO;
import com.juanbarcelos.doisirmaos.dto.ProductDTO;
import com.juanbarcelos.doisirmaos.entities.Product;
import com.juanbarcelos.doisirmaos.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public ProductDTO setQuantidade(Long id, int quantidade) {
		Product product = repository.getOne(id);
		product.setQuantidade(quantidade);
		product = repository.save(product);
		return new ProductDTO(product);
	}
}
