import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.modal';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) {}

    storeRecipes() {
        const token = this.authService.getToken();
        /* return this.httpClient.put(
            'https://ng-recipe-book-b6bfa.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(), {
                observe: 'body',
                params: new HttpParams().set('auth', token)
            }
        ); */
        const endPoint = 'https://ng-recipe-book-b6bfa.firebaseio.com/recipes.json';

        const req = new HttpRequest(
            'PUT',
            endPoint,
            this.recipeService.getRecipes(),
            {reportProgress: true, params: new HttpParams().set('auth', token)}
        );

        return this.httpClient.request(req);
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        // return this.httpClient.get<Recipe[]>('https://ng-recipe-book-b6bfa.firebaseio.com/recipes.json?auth=' + token)
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-b6bfa.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams().set('auth', token)
        })
            .map(
                recipes => {
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }

                    return recipes;
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
