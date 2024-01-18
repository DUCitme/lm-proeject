package fpt.aptech.LMProject.services;

import java.util.List;

import fpt.aptech.LMProject.entities.Book;
import fpt.aptech.LMProject.repository.BookRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
@Slf4j
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;

    @Override
    public Book getBook(int bookId) {
        log.info("Fetching all Books");
        return bookRepository.findById(bookId)
            .orElseThrow(() -> new RuntimeException("Book id " + bookId + " is not exit"));
    }

}