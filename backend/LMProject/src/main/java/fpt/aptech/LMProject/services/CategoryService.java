package fpt.aptech.LMProject.services;

import java.util.List;

import fpt.aptech.LMProject.entities.Book;
import fpt.aptech.LMProject.entities.Category;

public interface CategoryService {
    
    List<Category> getCategory();

    List<Book> getBookByCategoryId(int categoryId);
    
}
