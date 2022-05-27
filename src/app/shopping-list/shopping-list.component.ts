import { Component, OnInit } from '@angular/core';
import { lngredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: lngredient[] = [
    new lngredient('Apples', 5),
    new lngredient('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: lngredient) {
    this.ingredients.push(ingredient);
  }
}
