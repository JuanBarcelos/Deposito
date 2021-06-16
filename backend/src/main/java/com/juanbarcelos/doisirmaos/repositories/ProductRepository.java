package com.juanbarcelos.doisirmaos.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juanbarcelos.doisirmaos.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findAllByOrderByNameAsc();
}
