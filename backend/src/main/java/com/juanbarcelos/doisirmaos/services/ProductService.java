package com.juanbarcelos.doisirmaos.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.juanbarcelos.doisirmaos.dto.ProductDTO;
import com.juanbarcelos.doisirmaos.entities.Product;
import com.juanbarcelos.doisirmaos.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public List<ProductDTO> findAll(){
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
	
	//metodo de atualização dos dados do banco de dados
		public Product update(Long id, Product entity) {
			this.getOne(id);
			entity.setId(id);
			return this.insert(entity);
		}
		
		
		//metodo que retorna apenas um dado do banco de dados
		public Product getOne(Long id) {
			Optional<Product> optional = repository.findById(id);
			if(!optional.isPresent()) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity não foi encontrada!");
			}
			Product entity = optional.get();
			return entity;
		}
		
		//metodo que cadastra dados no banco de dados
		public Product insert(Product entity) {
			return repository.save(entity);
		}
}
