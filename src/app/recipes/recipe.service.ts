import { Recipe } from './recipe.modal';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - Just Awesome',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fies', 20)
            ]
        ),
        new Recipe(
          'Big Fat Burger',
          'What else you need to say ?',
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
              new Ingredient('Buns', 2),
              new Ingredient('Meat', 1)
          ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
