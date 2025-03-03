package org.example.controller;

import org.example.model.Ingredient;
import org.example.repository.IngredientRepository;
import org.example.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/menu")
public class CookBookController {

    @Autowired
    private IngredientRepository ingredientRepository;
    private RecipeRepository recipeRepository;

    @RequestMapping
    public String menu() {
        return "CookBook";
    }

    @GetMapping("/ingredients")
    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    @GetMapping("/ingredients/{id}")
    public ResponseEntity<Ingredient> getIngredientById(@PathVariable("id") long id) {
        Optional<Ingredient> ingredientData = ingredientRepository.findById(id);

        return ingredientData.map(ingredient -> new ResponseEntity<>(ingredient, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
