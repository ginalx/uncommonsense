import { Ingredient } from './cook.interface';

export const meals = [
    {
        id: 1, name: 'Pumpkin Stew',
        parts: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    },
    {
        id: 2, name: 'Curry Pilaf',
        parts: [{ id: 1 }, { id: 5 }, { id: 6 }]
    },
    {
        id: 3, name: 'Cream of Mushroom Soup',
        parts: [{ type: 1 }, { type: 2 }, { id: 2 }, { id: 7 }]
    },
    {
        id: 4, name: 'Mushroom Risotto',
        parts: [{ type: 1 }, { id: 6 }, { id: 1 }, { id: 7 }]
    }
];

export const ingredients: Ingredient[] = [
    { id: 1, name: 'Goat Butter' },
    { id: 2, name: 'Fresh Milk' },
    { id: 3, name: 'Tabantha Wheat' },
    { id: 4, name: 'Fortified Pumpkin' },
    { id: 5, name: 'Goron Spice' },
    { id: 6, name: 'Hylian Rice' },
    { id: 7, name: 'Rock Salt' },
    { id: 8, name: 'Rushroom', type: 1 },
    { id: 9, name: 'Sunshroom', type: 1 },
];

export const types = [
    { id: 1, name: 'Any mushroom' },
    { id: 2, name: 'Any vegetable, herb or flower' },
];
