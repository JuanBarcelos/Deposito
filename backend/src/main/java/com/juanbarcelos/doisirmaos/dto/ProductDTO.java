package com.juanbarcelos.doisirmaos.dto;

import java.io.Serializable;

import com.juanbarcelos.doisirmaos.entities.Order;
import com.juanbarcelos.doisirmaos.entities.Product;

public class ProductDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Double price;
	private String imageUri;
	private int quantidade;

	private Order order;

	public ProductDTO() {
	}

	public ProductDTO(Long id, String name, Double price, String imageUri, int quantidade) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.imageUri = imageUri;
		this.quantidade = quantidade;
	}

	public ProductDTO(Product entity) {
		id = entity.getId();
		name = entity.getName();
		price = entity.getPrice();
		imageUri = entity.getImageUri();
		quantidade = entity.getQuantidade();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int Quantidade) {
		this.quantidade = Quantidade;
	}

}
