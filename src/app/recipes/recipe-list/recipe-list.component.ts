import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pancakes', 'Sweet pancakes with motor oil', 'https://upload.wikimedia.org/wikipedia/commons/5/59/Honey_being_drizzled_onto_buttered_pancakes.jpg')
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.recipes);
  }

}
