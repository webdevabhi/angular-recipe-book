import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
