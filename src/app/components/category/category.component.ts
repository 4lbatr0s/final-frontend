import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[] = []
  currentCategory:Category
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
    })
  }

  setCurrentCategory(category:Category)
  {
    this.currentCategory = category
  }

  //if the current category equals the category we've clicked. then make it active.
  //re-renders all the category component every time you clicked on some category.
  //no performance loss, it's an ordinary process.

  //category: category we've clicked on.
  getCurrentCategory(category:Category){
    if(this.currentCategory === category){
      return `list-group-item active`
    } else {
      return `list-group-item`
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return `list-group-item list-group-item-action list-group-item-primary`
    } else {
      return `list-group-item list-group-item-primary`
    }
  }

  setCurrentCategoryEmpty(){
    this.currentCategory = {
      categoryId: 0,
      categoryName: ""
    }
  }
}
