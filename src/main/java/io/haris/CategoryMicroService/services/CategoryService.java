package io.haris.CategoryMicroService.services;

import io.haris.CategoryMicroService.DTO.CategoryDTO;

import java.util.Collection;

public interface CategoryService {
    public void addCategory(CategoryDTO category);
    public void deleteCategory(CategoryDTO category);
    public Collection<CategoryDTO> getCategories();
}
