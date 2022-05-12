import { Component, OnInit } from '@angular/core';
import { RecipeDto } from '../model/recipe.dto';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeDto[] = [
    new RecipeDto('Test Recipe', 'This is a Test.', '../../assets/mauve-it.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
