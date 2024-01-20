package fpt.aptech.LMProject.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fpt.aptech.LMProject.entities.Book;
import fpt.aptech.LMProject.entities.Category;
import fpt.aptech.LMProject.services.CategoryService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@AllArgsConstructor
public class CategoryController {

    private CategoryService categoryService;

    @GetMapping("/api/category")
    public List<Category> getCategory() {
        log.info("Receiving request get all Category .....!!!!!");
        return categoryService.getCategory();
    }


    @GetMapping("/api/category/{id}/book")
    public List<Book> getBookbyCategory(@PathVariable(name = "id") int categoryId) {
        log.info("Receiving request get all Book by category id {} .....!!!!!", categoryId);

        return categoryService.getBookByCategoryId(categoryId);
    
    }

}