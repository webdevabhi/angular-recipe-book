import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.modal';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put(
            'https://ng-recipe-book-b6bfa.firebaseio.com/recipes.json',
            this.recipeService.getRecipes()
        );
    }

    fetchRecipes() {
        return this.http.get('https://ng-recipe-book-b6bfa.firebaseio.com/recipes.json')
            .map(
                (response: any) => {
                    for (const recipe of response) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }

                    return response;
                }
            )
            .subscribe(
                (response: any) => {
                    const recipes: Recipe[] = response;
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
