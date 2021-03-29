import { Injectable } from '@angular/core';
import { Ingredient } from './cook.interface';
import { ingredients, meals } from './cook.store';

@Injectable()
export class CookService {
    getIngredients(): Ingredient[] {
        return ingredients;
    }

    cook(items: Ingredient[]): any {
        const ingredientIds = items.map(item => item.id);
        const ingredientTypes = items.map(item => item.type);

        console.log(ingredientTypes);

        return meals.find(meal =>
            meal.parts.every(({ id, type }) =>
            id ? ingredientIds.includes(id) : ingredientTypes.includes(type)));
    }
}
