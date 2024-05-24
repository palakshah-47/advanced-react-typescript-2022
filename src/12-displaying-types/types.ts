export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type Pizza = Readonly<{
  name: string;
  ingredients: string[];
  price: number;
  extras: string[];
}>;

export type ExtraIngredients = Record<string, ExtraIngredient>;

export type ExtraIngredient = Resolve<
  Readonly<{
    name: string;
    price: number;
  }>
>;

type Resolve<T> = T extends Function ? T : { [K in keyof T]: Resolve<T[K]> };

export type PizzaOnOrder = Resolve<
  Pick<Pizza, 'name' | 'price'> & {
    readonly extraIngredients: ExtraIngredient[];
  }
>;
