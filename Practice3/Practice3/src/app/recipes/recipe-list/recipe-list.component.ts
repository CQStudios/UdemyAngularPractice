import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('Mac and Cheese','cheesy pasta for the win~','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/WU-0103_mac-and-cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541000580.jpeg');
    new Recipe('Indian Curry Vegetables','heart healthy carrots, green beans, cauliflower, tomato, mushroom and parsley sauteed in indian curry sauce.','https://img.taste.com.au/kUVCKnrN/taste/2016/11/indian-style-vegetable-curry-59371-1.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
