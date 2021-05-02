package com.juanbarcelos.doisirmaos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juanbarcelos.doisirmaos.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
