import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://www.travelanddestinations.com/wp-content/uploads/2019/11/Nasi-lemak-meal.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
