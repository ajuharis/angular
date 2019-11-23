package io.haris.CategoryMicroService.resources;

import io.haris.CategoryMicroService.DTO.CategoryDTO;
import io.haris.CategoryMicroService.services.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryResource {
    @Autowired
    CategoryServiceImpl categoryService;
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    List<CategoryDTO> getCategories(){
        return categoryService.getCategories();
    }
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public void addCategory(@RequestBody CategoryDTO categoryDTO){
        categoryService.addCategory(categoryDTO);
    }
}
