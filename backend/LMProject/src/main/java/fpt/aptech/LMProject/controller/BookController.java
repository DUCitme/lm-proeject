package fpt.aptech.LMProject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fpt.aptech.LMProject.services.BookService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import fpt.aptech.LMProject.entities.Book;

@RestController
@Slf4j
@AllArgsConstructor
public class BookController {

    private BookService bookService;

    @GetMapping("/api/book/{id}")
    public Book getBook(@PathVariable(name = "id") int bookId) {
        log.info("Receiving request get all Book .....!!!!!");
        return bookService.getBook(bookId);
    }


}