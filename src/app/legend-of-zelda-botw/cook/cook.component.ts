import { Ingredient } from './cook.interface';
import { Component } from '@angular/core';
import { CookService } from './cook.service';

@Component({
  selector: 'app-loz-botw-cook',
  templateUrl: './cook.component.html',
  providers: [CookService]
})
export class LOZBOTWCookComponent {
  cookedMeal: any = undefined;

  constructor(public cookService: CookService) { }

  cook(ingredients: Ingredient[]): void {
    this.cookedMeal = this.cookService.cook(ingredients);
  }
}
