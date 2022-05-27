import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-V3-wfbyGagUsfDlJdC2v2vazd0ShcMBYw&usqp=CAU'),
    new Recipe('Another Test Recipe','This is simply a test', 'https://cdn.lifehack.org/wp-content/uploads/2017/05/20-Quick-and-Healthy-Dinner-Recipes-For-You-To-Choose-1024x768.png')
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
