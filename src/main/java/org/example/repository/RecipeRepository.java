package org.example.repository;

import org.example.entities.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository <Recipe, Long> {
}
