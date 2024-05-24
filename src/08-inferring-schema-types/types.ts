import { z } from 'zod';
import {
  pizzaSchema,
  extraIngredientSchema,
  extraIngredientsSchema,
  IExtraIngredient,
} from './schemas';

export type Pizza = z.infer<typeof pizzaSchema>;

export type ExtraIngredients = z.infer<typeof extraIngredientsSchema>;

export type ExtraIngredient = z.infer<typeof extraIngredientSchema>;

export type ExtraIngredient1 = IExtraIngredient[];

export type PizzaOnOrder = Pick<Pizza, 'name' | 'price'> & {
  extraIngredients: ExtraIngredient[];
};
