package io.haris.CategoryMicroService.services;

import io.haris.CategoryMicroService.DTO.CategoryDTO;
import io.haris.CategoryMicroService.model.Category;
import io.haris.CategoryMicroService.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    public CategoryRepository categoryRepository;
    @Autowired
    public RestTemplate restTemplate;
    @Autowired
    public WebClient.Builder webClientBuilder;
    @Override
    public void addCategory(CategoryDTO categoryDTO) {
        categoryRepository.save(toEntity(categoryDTO));
    }

    @Override
    public void deleteCategory(CategoryDTO categoryDTO) {
        categoryRepository.delete(toEntity(categoryDTO));
    }

    @Override
    public List<CategoryDTO> getCategories() {
        List<Category> categories = (ArrayList<Category>) categoryRepository.findAll();
        return categories.stream().map(category -> toDTO(category))
                .collect(Collectors.toList());
    }

    private Category toEntity(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setId(categoryDTO.getId());
        category.setName(categoryDTO.getName());
        category.setDescription(categoryDTO.getDescription());
        category.setStatus(categoryDTO.getStatus());
        category.setCreatedAt(categoryDTO.getCreatedAt());
        category.setUpdatedAt(categoryDTO.getUpdatedAt());
        return category;
    }

    private CategoryDTO toDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        categoryDTO.setDescription(category.getDescription());
        categoryDTO.setStatus(category.getStatus());
        categoryDTO.setCreatedAt(category.getCreatedAt());
        categoryDTO.setUpdatedAt(category.getUpdatedAt());
        return categoryDTO;
    }
}
