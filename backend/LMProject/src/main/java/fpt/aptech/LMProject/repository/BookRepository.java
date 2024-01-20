package fpt.aptech.LMProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fpt.aptech.LMProject.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
