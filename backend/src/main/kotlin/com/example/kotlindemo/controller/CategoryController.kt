package com.example.kotlindemo.controller

import com.example.kotlindemo.model.Category
import com.example.kotlindemo.repository.CategoryRepository
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@RestController
@RequestMapping("/api/categories")
class CategoryController(private val categoryRepository: CategoryRepository) {
  @GetMapping("/all")
  fun getAllCategories(): List<Category> {
    return categoryRepository.findAll()
  }

  @PostMapping("/add")
  fun createNewCategory(@Valid @RequestBody category: Category): Category {
    return categoryRepository.save(category)
  }

  @GetMapping("/detail/{id}")
  fun getCategoryById(@PathVariable id: Long): Category {
    return categoryRepository.findById(id).get()
  }

  @PutMapping("/update/{id}")
  fun updateCategoryById(@PathVariable id: Long, @RequestBody category: Category): Category {
    val categoryToUpdate = categoryRepository.findById(id).get()
    category.categoryid = categoryToUpdate.categoryid

    return categoryRepository.save(category)
  }

  @DeleteMapping("/delete/{id}")
  fun deleteCategoryById(@PathVariable id: Long): String {
    categoryRepository.deleteById(id)
    return "Category deleted successfully"
  }

}
