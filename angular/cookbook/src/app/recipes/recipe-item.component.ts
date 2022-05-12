import { Component, OnInit, Input } from '@angular/core';
import { RecipeDto } from '../model/recipe.dto';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe: RecipeDto;

  constructor() { }

  ngOnInit(): void {
  }

}
