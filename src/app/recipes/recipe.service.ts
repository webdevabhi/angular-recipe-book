import { Recipe } from './recipe.modal';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe(
          'Another Test Recipe',
          'This is simply another recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
