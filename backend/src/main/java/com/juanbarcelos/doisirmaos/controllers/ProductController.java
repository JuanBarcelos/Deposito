package com.juanbarcelos.doisirmaos.controllers;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juanbarcelos.doisirmaos.dto.OrderDTO;
import com.juanbarcelos.doisirmaos.dto.ProductDTO;
import com.juanbarcelos.doisirmaos.entities.Product;
import com.juanbarcelos.doisirmaos.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll(){
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	//metodo de atualização dos dados do banco de dados
	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<Product> update(@Valid @PathVariable(value = "id") Long id, @RequestBody Product entity) {
		Product updatedEntity = service.update(id, entity);
		return ResponseEntity.ok(updatedEntity);
	}
}
