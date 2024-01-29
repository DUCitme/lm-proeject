package com.example.kotlindemo.controller

import com.example.kotlindemo.model.Book
import com.example.kotlindemo.repository.BookRepository
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@RestController
@RequestMapping("/api/books")
class BookController(private val bookRepository: BookRepository) {
  @GetMapping("/all")
  fun getAllBooks(): List<Book> {
    return bookRepository.findAll()
  }

  @PostMapping("/add")
  fun createNewBook(@Valid @RequestBody book: Book): Book {
    return bookRepository.save(book)
  }

  @GetMapping("/detail/{id}")
  fun getBookById(@PathVariable id: Long): Book {
    return bookRepository.findById(id).get()
  }

  @PutMapping("/update/{id}")
  fun updateBookById(@PathVariable id: Long, @RequestBody book: Book): Book {
    val bookToUpdate = bookRepository.findById(id).get()
    book.bookid = bookToUpdate.bookid

    return bookRepository.save(book)
  }

  @DeleteMapping("/delete/{id}")
  fun deleteBookById(@PathVariable id: Long): String {
    bookRepository.deleteById(id)
    return "Book deleted successfully"
  }
}
