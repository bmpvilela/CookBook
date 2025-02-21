package org.example.controller;

import org.example.entities.Ingredient;
import org.example.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    @Autowired
    private IngredientRepository repository;

    @RequestMapping
    public String menu() {
        return "Some String";
    }

    @GetMapping
    public List<Ingredient> getAllIngredients() {
        return repository.findAll();
    }

}
