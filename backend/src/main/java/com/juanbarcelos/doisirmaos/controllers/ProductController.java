package com.juanbarcelos.doisirmaos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juanbarcelos.doisirmaos.dto.ProductDTO;
import com.juanbarcelos.doisirmaos.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

	@Autowired
	private ProductService service;

	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() {
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ProductDTO> setQuantidade(@PathVariable Long id, @PathVariable int qtd) {
		ProductDTO dto = service.setQuantidade(id, qtd);
		return ResponseEntity.ok().body(dto);

	}

}
