package fpt.aptech.LMProject.services;

import java.util.List;
import java.util.Optional;

import fpt.aptech.LMProject.entities.Book;
import fpt.aptech.LMProject.entities.Category;
import fpt.aptech.LMProject.repository.CategoryRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;


import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getCategory() {
        log.info("Fetching allCategory");
        return categoryRepository.findAll();
    }

    @Override
    public List<Book> getBookByCategoryId(int categoryId) {
        return categoryRepository.findById(categoryId)
        .orElseThrow(() -> new RuntimeException("Category Id " + categoryId +" is not exist"))
        .getBooks();

    }
}